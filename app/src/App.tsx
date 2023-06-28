import { panda } from "@panda/jsx";
import {
  BulletPoint,
  BulletPoints,
  Chart,
  ChartCaption,
  ChartDataAge,
  ChartDataDied,
  ChartDataDisabled,
  ChartDataHospital,
  ChartDataSex,
  ChartDataTotal,
  Charts,
  ChartTitle,
  ChartVaxManufacturer,
  ChartVaxType,
  DynamicText,
  Filters,
  FilterVaccine,
  FilterYear,
  Footer,
  Main,
  RechartWrapper,
  SectionTitle,
  Title
} from "@src/components";
import { useApi } from "@src/hooks";
import { getNumberFormatted, useParams } from "@src/lib";

const App = () => {
  const { data } = useApi();

  const { vaccine, year } = useParams();

  if (!data) return null;

  return (
    <Main>
      <Filters>
        <FilterVaccine />
        <FilterYear />
      </Filters>
      <Title>
        VAERS Report{vaccine ? `, ${vaccine}` : ""}
        {year ? `, ${year}` : ""}
      </Title>
      <BulletPoints>
        <BulletPoint mt={{ base: "8", md: "12" }}>
          Reports totaled{" "}
          <DynamicText>
            {getNumberFormatted(data.total)}
          </DynamicText>
          .
        </BulletPoint>
      </BulletPoints>
      <SectionTitle>Part 1: VAERS General</SectionTitle>
      <Charts>
        <Chart>
          <ChartTitle>
            VAERS, {vaccine || "All Vaccines"},{" "}
            {year || "All Years"}
          </ChartTitle>
          <RechartWrapper>
            <ChartDataTotal
              data={data.analyze.data.total.data}
            />
          </RechartWrapper>
        </Chart>
        <Chart>
          <ChartTitle>
            VAERS, Victim Age, {vaccine || "All Vaccines"},{" "}
            {year || "All Years"}
          </ChartTitle>
          <RechartWrapper>
            <ChartDataAge data={data.analyze.data.age.data} />
          </RechartWrapper>
          <ChartCaption>
            Age unknown for{" "}
            <b>
              {getNumberFormatted(data.analyze.data.age.unknown)}
            </b>{" "}
            reports.
          </ChartCaption>
        </Chart>
        <Chart>
          <ChartTitle>
            VAERS, Victim Sex, {vaccine || "All Vaccines"},{" "}
            {year || "All Years"}
          </ChartTitle>
          <RechartWrapper>
            <ChartDataSex data={data.analyze.data.sex.chart} />
          </RechartWrapper>
          <ChartCaption>
            Sex unknown for{" "}
            <b>
              {getNumberFormatted(data.analyze.data.sex.unknown)}
            </b>{" "}
            reports.
          </ChartCaption>
        </Chart>
      </Charts>
      <SectionTitle>Part 2: VAERS Outcomes</SectionTitle>
      <Charts>
        <Chart>
          <ChartTitle>
            VAERS, Hospital, {vaccine || "All Vaccines"},{" "}
            {year || "All Years"}
          </ChartTitle>
          <RechartWrapper>
            <ChartDataHospital
              data={data.analyze.data.hospital.chart}
            />
          </RechartWrapper>
        </Chart>
        <Chart>
          <ChartTitle>
            VAERS, Disabled, {vaccine || "All Vaccines"},{" "}
            {year || "All Years"}
          </ChartTitle>
          <RechartWrapper>
            <ChartDataDisabled
              data={data.analyze.data.disabled.chart}
            />
          </RechartWrapper>
        </Chart>
        <Chart>
          <ChartTitle>
            VAERS, Died, {vaccine || "All Vaccines"},{" "}
            {year || "All Years"}
          </ChartTitle>
          <RechartWrapper>
            <ChartDataDied data={data.analyze.data.died.chart} />
          </RechartWrapper>
        </Chart>
      </Charts>
      <SectionTitle>Part 3: VAERS Vaccines</SectionTitle>
      <Charts>
        <Chart>
          <ChartTitle>
            VAERS, Vaccine Manufacturer,{" "}
            {vaccine || "All Vaccines"}, {year || "All Years"}
          </ChartTitle>
          <RechartWrapper>
            <ChartVaxManufacturer
              data={data.analyze.vax.manufacturer.data}
            />
          </RechartWrapper>
        </Chart>
        <Chart>
          <ChartTitle>
            VAERS, Vaccine Type, {vaccine || "All Vaccines"},{" "}
            {year || "All Years"}
          </ChartTitle>
          <RechartWrapper>
            <ChartVaxType data={data.analyze.vax.type.data} />
          </RechartWrapper>
          <ChartCaption>
            Unknown is represented by <b>UNK</b>.
          </ChartCaption>
          {vaccine && (
            <ChartCaption>
              <panda.span fontStyle="italic">Note:</panda.span>{" "}
              Multiple vaccines may be present due to VAERS
              reports that include multiple vaccines.
            </ChartCaption>
          )}
        </Chart>
      </Charts>
      <Footer />
    </Main>
  );
};

export default App;
