(function() {
    function replace(classList,delItem,setItem){
        classList.remove(delItem);
        classList.add(setItem);
    
        console.log(classList)
    }
  var menus = document.getElementsByClassName('menu-by-max');
  for (var i = 0; i < menus.length; i++) {
    menus[i].addEventListener('click', function() {
      var switchMenu = this.querySelector('#btn')
      console.log(switchMenu.classList)
      console.log(switchMenu.classList.contains('closed'));
      if (switchMenu.classList.contains('closed')) {
        replace(switchMenu.classList,'closed', 'opened');
        switchMenu.innerHTML = 'Скрыть';
        replace(this.querySelector('#submenu').classList,'submenu_closed','submenu_opened');
      } else {
        replace(switchMenu.classList,'opened', 'closed');
        switchMenu.innerHTML = 'Подробнее';
        replace(this.querySelector('#submenu').classList,'submenu_opened','submenu_closed')
      }
    })
  }
})()