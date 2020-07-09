FROM hayd/alpine-deno:1.1.3

EXPOSE 8000 

WORKDIR /app

# Prefer not to run as root.
USER deno

# These steps will be re-run upon each file change in your working directory:
ADD . .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache dogyearserver.ts

CMD ["run", "--allow-net", "dogyearserver.ts"]
