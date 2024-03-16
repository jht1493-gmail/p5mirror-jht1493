let sel;

function setup() {
  textAlign(CENTER);
  background(200);
  
  sel = createSelect();
  
  // sel.position(10, 10);
  sel.id('mysel')
  sel.option('pear');
  sel.option('kiwi');
  sel.option('grape');
  sel.changed(mySelectEvent);
}

function mySelectEvent(evt) {
  // print('mysel', arguments);
  print('evt', evt);
  print('evt.target', evt.target)
  
  background(200);

  let item = sel.value();
  text("it's a " + item + '!', 50, 50);
}