import curses
from curses import wrapper
import time

import globalset as gs
from control import Control


def main(stdscr):
    '''Main game flow starts here'''

    gs.resize()
    s = Control(stdscr)

    stdscr.nodelay(True)
    curses.curs_set(0)
    stdscr.resize(gs.WIN_H, gs.WIN_W)
    stdscr.clear()

    while(True):
        c = stdscr.getch()
        curses.flushinp()
        stdscr.clear()

        # Game preprocessing logic: make aliens, etc
        gs.tm = gs.tm + gs.CLOCK_CYCLE  # timer
        s.refreshMissile()  # refreses missile positions
        s.refreshAlien()  # refreshes alien list
        if(gs.tm % gs.SPAWN_TIME <= gs.CLOCK_CYCLE):
            s.genAlien()  # generates aliens

        # draw board
        s.draw()

        # deal with input
        if(c == ord('q')):
            return
        s.keyIn(c)

        # border drawing
        stdscr.addstr(0, 0, '+')
        stdscr.addstr(0, gs.WIN_W-2, '+')
        stdscr.addstr(gs.WIN_H-1, 0, '+')
        stdscr.addstr(gs.WIN_H-1, gs.WIN_W-2, '+')
        stdscr.hline(0, 1, '-', gs.WIN_W-3)
        stdscr.hline(gs.WIN_H-1, 1, '-', gs.WIN_W-3)
        stdscr.vline(1, 0, '|', gs.WIN_H-2)
        stdscr.vline(1, gs.WIN_W-2, '|', gs.WIN_H-2)
        time.sleep(gs.CLOCK_CYCLE)


wrapper(main)
