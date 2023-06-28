cd ./app && pnpm chore:lint

cd ..

cd ./notebook && black ./

cd ..

cd ./py && black ./
