pip install pre-commit

pre-commit install

cd ./app && pnpm i --frozen-lockfile=false

cd ..

cd ./notebook && pip install -r ./requirements.txt

cd ..

cd ./py && pip install -r ./requirements.txt
