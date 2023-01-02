# Rock Paper Scissors


## Routes

### post request

// post -> `/game/start`


### Data Format

<br>

#### Input  Data
<br>

```
{
    "game":{
        "player1":"Rock",
        "player2":"Rock",
        "player3":"Paper",
        "player4":"Scissor"
    },
    "id":"1"
}

```

<br>
<br>


### Response Data
<br>

```
{
  "result": {
    "player1": {
      "player1": 0,
      "player2": 0,
      "player3": 0,
      "player4": 2
    },
    "player2": {
      "player1": 0,
      "player2": 0,
      "player3": 0,
      "player4": 2
    },
    "player3": {
      "player1": 2,
      "player2": 2,
      "player3": 0,
      "player4": 0
    },
    "player4": {
      "player1": 0,
      "player2": 0,
      "player3": 2,
      "player4": 0
    }
  },
  "count": 2,
  "id": 1,
  "_id": "63b2411ff9209f07c4bf148f",
  "createdAt": "2023-01-02T02:27:43.685Z",
  "updatedAt": "2023-01-02T02:27:43.685Z",
  "__v": 0
}
```


<br>



### 50th response Data Format
<br>



```
[
  {
    "_id": "63b2405ba58d8ec7b75a1f3b",
    "result": {
      "player1": {
        "player1": 0,
        "player2": 0,
        "player3": 0,
        "player4": 1
      },
      "player2": {
        "player1": 0,
        "player2": 0,
        "player3": 0,
        "player4": 1
      },
      "player3": {
        "player1": 1,
        "player2": 1,
        "player3": 0,
        "player4": 0
      },
      "player4": {
        "player1": 0,
        "player2": 0,
        "player3": 1,
        "player4": 0
      }
    },
    "count": 1,
    "id": 1,
    "createdAt": "2023-01-02T02:24:27.165Z",
    "updatedAt": "2023-01-02T02:24:27.165Z",
    "__v": 0
  },
  {
    "_id": "63b2411ff9209f07c4bf148f",
    "result": {
      "player1": {
        "player1": 0,
        "player2": 0,
        "player3": 0,
        "player4": 2
      },
      "player2": {
        "player1": 0,
        "player2": 0,
        "player3": 0,
        "player4": 2
      },
      "player3": {
        "player1": 2,
        "player2": 2,
        "player3": 0,
        "player4": 0
      },
      "player4": {
        "player1": 0,
        "player2": 0,
        "player3": 2,
        "player4": 0
      }
    },
    "count": 2,
    "id": 1,
    "createdAt": "2023-01-02T02:27:43.685Z",
    "updatedAt": "2023-01-02T02:27:43.685Z",
    "__v": 0
  },
  {
    "_id": "63b24415d08f4f28060754d3",
    "result": {
      "player1": {
        "player1": 0,
        "player2": 0,
        "player3": 0,
        "player4": 3
      },
      "player2": {
        "player1": 0,
        "player2": 0,
        "player3": 0,
        "player4": 3
      },
      "player3": {
        "player1": 3,
        "player2": 3,
        "player3": 0,
        "player4": 0
      },
      "player4": {
        "player1": 0,
        "player2": 0,
        "player3": 3,
        "player4": 0
      }
    },
    "count": 3,
    "id": 1,
    "createdAt": "2023-01-02T02:40:21.790Z",
    "updatedAt": "2023-01-02T02:40:21.790Z",
    "__v": 0
  }
]

```







