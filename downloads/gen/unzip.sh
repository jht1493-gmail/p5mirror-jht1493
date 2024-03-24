cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-jht1493/downloads/../p5projects"
#
echo unzip 1 "timed-drawing-eV5XXhkWG"
rm -rf "./timed-drawing-eV5XXhkWG"
mkdir "./timed-drawing-eV5XXhkWG"
pushd "./timed-drawing-eV5XXhkWG" > /dev/null
unzip -q "../../downloads/zips/timed-drawing-eV5XXhkWG"
popd > /dev/null

cd ..
# remove redundant p5.js p5.sound.min.js
rm -f p5projects/*/p5.*
# sync last_updatedAt.txt
cd downloads/json
if [ -e pending_updatedAt.txt ]; then
  rm -f last_updatedAt.txt
  mv pending_updatedAt.txt last_updatedAt.txt
fi