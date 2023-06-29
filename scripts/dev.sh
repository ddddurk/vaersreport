cd ./py && uvicorn api:app --port 3001 --reload & PIDAPI=$!
cd ./app && pnpm dev & PIDAPP=$!
wait $PIDAPI
wait $PIDAPP