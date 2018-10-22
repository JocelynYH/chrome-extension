var recommended = document.getElementById('contents');
//recommended.parentNode.removeChild(recommended);

var parent = recommended.parent();

recommended.parent().remove();

parent.append();
