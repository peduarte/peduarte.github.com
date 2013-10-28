#!/bin/bash
echo "Starting deployment to pedroduarte.github.io (github pages)...";

echo "Making sure branch 'develop' is up to date...";
git checkout develop;
git add .;
git commit -am "Updated branch 'develop'."
git pull origin develop;
git push origin develop;

echo "Switching to branch 'master'...";
git checkout master;
git pull origin master;
cp -r dest/. .;
rm -rf dest;
git add .;
git commit -am "New version generated from develop.";
git push origin master;

echo "Switching back to branch 'develop'...";
git checkout develop;
