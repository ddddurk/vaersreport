import { panda } from "@panda/jsx";
import {
  BulletPoint,
  BulletPoints,
  Chart,
  ChartCaption,
  ChartDataAges,
  ChartDataDied,
  ChartDataDisabled,
  ChartDataHospital,
  ChartDataSexes,
  ChartDataTotals,
  Charts,
  ChartTitle,
  ChartVaxManufacturers,
  ChartVaxVaccines,
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
import {
  getData,
  getNumberFormatted,
  useParams
} from "@src/lib";

const App = () => {
  const data = getData();

  const { vaccine, year } = useParams();

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
            <ChartDataTotals data={data.data.totals.data} />
          </RechartWrapper>
        </Chart>
        <Chart>
          <ChartTitle>
            VAERS, By Victim Age, {vaccine || "All Vaccines"},{" "}
            {year || "All Years"}
          </ChartTitle>
          <RechartWrapper>
            <ChartDataAges data={data.data.ages.data} />
          </RechartWrapper>
          <ChartCaption>
            Age unknown for{" "}
            <b>{getNumberFormatted(data.data.ages.unknown)}</b>{" "}
            reports.
          </ChartCaption>
        </Chart>
        <Chart>
          <ChartTitle>
            VAERS, By Victim Sex, {vaccine || "All Vaccines"},{" "}
            {year || "All Years"}
          </ChartTitle>
          <RechartWrapper>
            <ChartDataSexes data={data.data.sexes.chart} />
          </RechartWrapper>
          <ChartCaption>
            Sex unknown for{" "}
            <b>{getNumberFormatted(data.data.sexes.unknown)}</b>{" "}
            reports.
          </ChartCaption>
        </Chart>
      </Charts>
      <SectionTitle>Part 2: VAERS Outcomes</SectionTitle>
      <Charts>
        <Chart>
          <ChartTitle>
            VAERS, By Outcome Hospital,{" "}
            {vaccine || "All Vaccines"}, {year || "All Years"}
          </ChartTitle>
          <RechartWrapper>
            <ChartDataHospital data={data.data.hospital.chart} />
          </RechartWrapper>
        </Chart>
        <Chart>
          <ChartTitle>
            VAERS, By Outcome Disabled,{" "}
            {vaccine || "All Vaccines"}, {year || "All Years"}
          </ChartTitle>
          <RechartWrapper>
            <ChartDataDisabled data={data.data.disabled.chart} />
          </RechartWrapper>
        </Chart>
        <Chart>
          <ChartTitle>
            VAERS, By Outcome Died, {vaccine || "All Vaccines"},{" "}
            {year || "All Years"}
          </ChartTitle>
          <RechartWrapper>
            <ChartDataDied data={data.data.died.chart} />
          </RechartWrapper>
        </Chart>
      </Charts>
      <SectionTitle>Part 3: VAERS Vaccines</SectionTitle>
      <Charts>
        <Chart>
          <ChartTitle>
            VAERS, By Vaccine Manufacturer,{" "}
            {vaccine || "All Vaccines"}, {year || "All Years"}
          </ChartTitle>
          <RechartWrapper>
            <ChartVaxManufacturers
              data={data.vax.manufacturers.data}
            />
          </RechartWrapper>
        </Chart>
        <Chart>
          <ChartTitle>
            VAERS, By Vaccine Type, {vaccine || "All Vaccines"},{" "}
            {year || "All Years"}
          </ChartTitle>
          <RechartWrapper>
            <ChartVaxVaccines data={data.vax.vaccines.data} />
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
