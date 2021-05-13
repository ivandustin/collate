# Collate

Collate Greek New Testament manuscripts.
Inspired from the [CNTR Collation](https://greekcntr.org/collation/index.htm).

Download the CNTR Transcriptions [here](https://greekcntr.org/downloads/index.htm).

## Install

```sh
npm install -g collatia
```

## Usage

```sh
collate ../cntr/transcriptions -o output
```

## Command Line Interface

```sh
$ collate ../cntr/transcriptions
Enter manuscript address (e.g. 40001001): 43001002
┌──────────┬─────────┬──────┬──────┬────────┬────────┬───────┬──────┐
│ (index)  │    0    │  1   │  2   │   3    │   4    │   5   │  6   │
├──────────┼─────────┼──────┼──────┼────────┼────────┼───────┼──────┤
│ GA10066  │ 'ΟΥΤΟΣ' │ 'ΗΝ' │ 'ΕΝ' │ 'ΑΡΧΗ' │ 'ΠΡΟΣ' │ 'ΤΟΝ' │ 'ΘΝ' │
│ GA10075  │ 'ΟΥΤΟΣ' │ 'ΗΝ' │ 'ΕΝ' │ 'ΑΡΧΗ' │ 'ΠΡΟΣ' │ 'ΤΟΝ' │ 'ΘΝ' │
│ GA20001  │ 'ΟΥΤΟΣ' │ 'ΗΝ' │ 'ΕΝ' │ 'ΑΡΧΗ' │ 'ΠΡΟΣ' │ 'ΤΟΝ' │ 'ΘΝ' │
│ GA20002  │ 'ΟΥΤΟΣ' │ 'ΗΝ' │ 'ΕΝ' │ 'ΑΡΧΗ' │ 'ΠΡΟΣ' │ 'ΤΟΝ' │ 'ΘΝ' │
│ GA20003  │ 'ΟΥΤΟΣ' │ 'ΗΝ' │ 'ΕΝ' │ 'ΑΡΧΗ' │ 'ΠΡΟΣ' │ 'ΤΟΝ' │ 'ΘΝ' │
│ GA20005  │ 'ΟΥΤΟΣ' │ 'ΗΝ' │ 'ΕΝ' │ 'ΑΡΧΗ' │ 'ΠΡΟΣ' │ 'ΤΟΝ' │ 'ΘΝ' │
│ GA20032  │ 'ΟΥΤΟΣ' │ 'ΗΝ' │ 'ΕΝ' │ 'ΑΡΧΗ' │ 'ΠΡΟΣ' │ 'ΤΟΝ' │ 'ΘΝ' │
│ TM064853 │ 'ΟΥΤΟΣ' │ 'ΗΝ' │ 'ΕΝ' │ 'ΑΡΧΗ' │ 'ΠΡΟΣ' │ 'ΤΟΝ' │ 'ΘΝ' │
└──────────┴─────────┴──────┴──────┴────────┴────────┴───────┴──────┘
Enter manuscript address (e.g. 40001001):
```
