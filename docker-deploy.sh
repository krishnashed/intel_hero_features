#!/bin/bash
git pull
docker build -t akarx/intel-hero:latest .
docker push akarx/intel-hero:latest
