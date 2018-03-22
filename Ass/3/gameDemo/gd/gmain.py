import curses
from curses import wrapper
import time

import globalset as gs
from control import Control

def main(stdscr):

    s = Control(stdscr)

    stdscr.nodelay(True)
    curses.curs_set(0)
    stdscr.resize(24, 80)
    stdscr.clear()
    stdscr.border(0, 0, 0, 0, 0, 0, 0, 0)

    while(True):
        c = stdscr.getch()
        curses.flushinp()
        stdscr.clear()

        # Game preprocessing logic: make aliens, etc
        gs.tm = gs.tm + gs.CLOCK_CYCLE # timer
        s.refreshMissile() # refreses missile positions
        s.refreshAlien() # refreshes alien list
        if(gs.tm % gs.SPAWN_TIME <= gs.CLOCK_CYCLE):
            s.genAlien() # generates aliens

        # draw board
        s.draw()

        # deal with input
        if(c == ord('q')):
            return
        s.keyIn(c)

        stdscr.border(0, 0, 0, 0, 0, 0, 0, 0)
        stdscr.resize(24, 80)
        time.sleep(gs.CLOCK_CYCLE)

wrapper(main)
