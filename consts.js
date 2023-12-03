export const BLOCK_SIZE = 20
export const BOARD_WIDTH = 14
export const BOARD_HEIGHT = 30

export const EVENT_MOVEMENTS = {
  LEFT: 'ArrowLeft',
  DOWN: 'ArrowDown',
  RIGHT: 'ArrowRight'
}

export const PIECES = [
  [
    {
      color: 'firebrick',
      shape: [
        [1, 1],
        [1, 1]
      ]
    }
  ],
  [
    {
      color: 'darkorange',
      shape: [
        [1, 1, 1, 1]
      ]
    }
  ],
  [
    {
      color: 'blueviolet',
      shape: [
        [0, 1, 0],
        [1, 1, 1]
      ]
    }
  ],
  [
    {
      color: 'lawngreen',
      shape: [
        [1, 1, 0],
        [0, 1, 1]
      ]
    }
  ],
  [
    {
      color: 'chartreuse',
      shape: [
        [0, 1, 1],
        [1, 1, 0]
      ]
    }
  ],
  [
    {
      color: 'royalblue',
      shape: [
        [1, 0],
        [1, 0],
        [1, 1]
      ]
    }
  ],
  [
    {
      color: 'steelblue',
      shape: [
        [0, 1],
        [0, 1],
        [1, 1]
      ]
    }
  ]
  /* [
    {
      color: 'teal',
      shape: [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1]
      ]
    }
  ] */
]
