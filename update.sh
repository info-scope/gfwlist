#!/usr/bin/env bash
wget -N https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt
npm start
git commit -am "update"
git push