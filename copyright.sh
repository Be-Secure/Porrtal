export COPYRIGHTLEN=13
find . -type d -name "node_modules" -prune -o -type d -name "dist" -prune -o -type d -name "**/next-env.d.ts" -prune -o -name "*.ts" -print0 | xargs -0 ./copyrightadd.sh