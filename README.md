# raffle

Picks raffle winners.

## How to use

These instructions assume you have Git and Node.js installed on your machine.

1. In a terminal, run:

```
git clone https://github.com/a-n-d-r-3-w/raffle.git
```

2. In the `raffle` folder, put a file named `students.csv` that contains comma-separated values in this format:

```
LastName,FirstName,Homeroom
Wormwood,Matilda,K-MH
Cadwallader,Claire,4-EP
...
Potter,Harry,4-EP
```

3. In a terminal, run:

```
node index.js
```

4. Example output:

```
Winner of the teacher experience for 4-EP: Harry Potter
Winner of the teacher experience for K-MH: Matilda Wormwood
Winner of "Principal For A Day": Claire Cadwallader
```
