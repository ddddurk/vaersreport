pip install pre-commit

pre-commit install

cd ./api && pip install -r ./requirements.txt

cd ..

cd ./app && pnpm i --frozen-lockfile=false

cd ..

cd ./notebook && pip install -r ./requirements.txt
