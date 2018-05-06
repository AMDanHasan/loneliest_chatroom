$(document).ready(function(){
  let authors = ['Me', 'Myself', 'I'];
  let num = 0;
  function sendMessage(newMsg, author = authors[num%3]){
    let msgHTML =`<li class="message">
      <a class='delete' href='#'>Delete</a>
      <h3 class="author">${author}</h3>
      <p class="message-body">${newMsg}</p>
      <span class="timestamp">${(new Date).getHours()}:${(new Date).getMinutes()}</span>
    </li>`;
    num++;
    $('#conversation').append(msgHTML);
    $('#new-message-body').val('');
  };
  $('#new-message-button').click(function(){
    let newMsg = $('#new-message-body').val();
    sendMessage(newMsg);
  });
  $('.new-message').keypress(function(entKey) {
    if(entKey.which == 13){
      let newMsg = $('#new-message-body').val();
      sendMessage(newMsg);
    }
  });
  $('#conversation').on("click", "a", function(){
    $(this).parent().remove();
  });
  $('#lonely').click(function(){
    $.ajax({url: "http://api.icndb.com/jokes/random/", success: function(data){
      sendMessage(data.value.joke, "Internet");
    }});
  });
});
