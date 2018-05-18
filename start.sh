#!/usr/bin/env bash
# script for starting atomOS from lightdm xsession
# It also starts xfwm4 as recommended WM
xfwm4 & # or you may use mutter

#xrandr --output DVI-D-0 --off --output HDMI-1-2 --off --output HDMI-1-1 --mode 1920x1080 --pos 0x0 --rotate normal --output DP-1 --off --output HDMI-0 --primary --mode 1920x1080 --pos 1920x0 --rotate normal --output DP-1-1 --off --output DP-0 --off &
# flag --disable-gpu gives performance boost in 2D applications
# (resizing, content changes, GPU part, software rendering is faster somehow),
# as well as disabllity of 3D. If you need 3D, remove the flag
electron /atomos --enable-transparent-visuals
