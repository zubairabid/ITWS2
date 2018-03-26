# Timing and speeds
CLOCK_CYCLE = 0.05
SPAWN_TIME = 10
ALIEN_LIFE = 8
EXTENSION = 5
STDSPEED = 2
BSPEED = 4

# Dimensions
NROWS = 8
NCOLS = 8

ROW_H = 3
COL_W = 6


def resize():
    global ROW_H, ROW_OF, COL_W, COL_OF, WIN_H, WIN_W
    ROW_OF = 1 * ROW_H
    COL_OF = 1 * COL_W
    WIN_H = NROWS * ROW_H + 2 * ROW_OF + 9 * ROW_H
    WIN_W = NCOLS * COL_W + 2 * COL_OF + 2 * COL_W + 56
    resized = True


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
