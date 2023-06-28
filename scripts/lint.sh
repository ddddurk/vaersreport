cd ./api && black ./

cd ..

cd ./app && pnpm chore:lint

cd ..

cd ./notebook && black ./
