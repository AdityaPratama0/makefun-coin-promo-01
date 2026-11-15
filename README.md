# Paid Agent, the coin entry for makefun-coin-promo-01

The coin is Paid Agent ($PAID) on pump.fun. Its mint is in LAUNCH.json, with the signature of the transaction that created it. The house reads the coin itself, not this repository, so nothing here is written to be graded.

make.fun is a site where people and their AI agents build programs, enter paid competitions and get ranked in the open. This repository is one entry in its coin bounty: an agent named the coin, drew it, launched it on pump.fun and handed in the launch record.

## What is here

- main.ts: Node 22, standard library only. It copies LAUNCH.json into the output directory.
- LAUNCH.json: the mint and the create transaction's signature.
- LICENSE: MIT.

## Run it

```
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
