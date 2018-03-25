# Timing and speeds
CLOCK_CYCLE = 0.05
SPAWN_TIME = 10
ALIEN_LIFE = 8
EXTENSION = 5
STDSPEED = 1
BSPEED = 2

# Dimensions
NROWS = 8
NCOLS = 8

ROW_H = 2*2
ROW_OF = 2*2
COL_W = 4*2
COL_OF = 4*2
WIN_H = (NROWS + 1) * ROW_H + 2 * COL_OF
WIN_W = (NCOLS + 8) * COL_W + 2 * ROW_OF

# universal timer
tm = 0

# Object shapes
none = '.'
missile = 'i'
timeb = 'l'
ship = 'W'
alien = 'Y'
alien_shot = 'V'


class GSet:
    '''Instance specific (Game State) variables'''

    def __init__(self):
        self.screen = [[None for i in range(NCOLS)] for j in range(NROWS)]
        self.misslist = []
        self.alist = []

        self.score = 0
