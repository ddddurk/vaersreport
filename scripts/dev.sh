cd ./api && uvicorn main:app --port 3000 --reload & PIDAPI=$!
cd ./app && pnpm dev & PIDAPP=$!
wait $PIDAPI
wait $PIDAPP
