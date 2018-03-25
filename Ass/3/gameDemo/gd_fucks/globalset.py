CLOCK_CYCLE = 0.01
SPAWN_TIME = 2
ALIEN_LIFE = 2
EXTENSION = 5
STDSPEED = 10
BSPEED = 20

ROW_H = 2*2
ROW_OF = 2*2
COL_W = 4*2
COL_OF = 2*2
WIN_H = 24*2
WIN_W = 80*2

tm = 0

none = '.'
missile = 'i'
timeb = 'l'
ship = 'W'
alien = 'Y'
alien_shot = 'P'

# Instance specific variables
class GSet:
    def __init__(self):
        self.screen = [[None for i in range(8)] for j in range(8)]
        self.misslist = []
        self.alist = []

        self.score = 0
