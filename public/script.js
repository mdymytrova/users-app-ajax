$(function() {

// GET
function showUsers() {
  $.getJSON('/api/users')
  .done(function(users) {
    $.each(users, function(key, user) {
      $('#userlist-container').append(`
        <article class="user-info" data-user="${user.id}">
        <div class="user-contacts">
        <h3>${user.firstName} ${user.lastName}</h3>
        <p>Age: ${user.age}</p>
        <p>Email: ${user.email}</p>
        </div>
        <div class="buttons-container">
        <form action="/users/${user.id}/edit" method="get">
        <button type="submit" class="button button-edit" data-id="${user.id}">Edit</button>
        </form>

        <form action="/users/delete/${user.id}" method="post" class="form-delete">
        <button type="button" class="button button-edit button-delete" data-id="${user.id}">Delete</button>
        </form>
        </div>
        </article>
      `);
    });
  });
}

showUsers();

// POST
function addUser() {
  const firstName = $('#firstName').val();
  const lastName = $('#lastName').val();
  const age = $('#age').val();
  const email = $('#email').val();
  const id = $('article').length+100;
  const newUser = {
    firstName, lastName, email, age, id
  };
  
  $.ajax({
    url: 'api/users',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(newUser),
    success: function() {
      $('#userlist-container').append(`
        <article class="user-info" data-user="${newUser.id}">
        <div class="user-contacts">
        <h3>${newUser.firstName} ${newUser.lastName}</h3>
        <p>Age: ${newUser.age}</p>
        <p>Email: ${newUser.email}</p>
        </div>
        <div class="buttons-container">
        <form action="/users/${newUser.id}/edit" method="get">
        <button type="submit" class="button button-edit" data-id="${newUser.id}">Edit</button>
        </form>

        <form action="/users/delete/${newUser.id}" method="post" class="form-delete">
        <button type="button" class="button button-edit button-delete" data-id="${newUser.id}">Delete</button>
        </form>
        </div>
        </article>
      `);
      $('#new-user-form')[0].reset();
      console.log(newUser);
    }
  });
}


//PUT
function editUser() {
  const firstName = $('#firstName').val();
  const lastName = $('#lastName').val();
  const age = $('#age').val();
  const email = $('#email').val();
  const id = $('form').attr('data-id');
  const editedUser = {
    firstName, lastName, email, age
  };
  $.ajax({
    url: `/users/${id}`,
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(editedUser),
    success: function() {
      console.log(editedUser);
      window.location.href="/users";
    }
  });
}




//DELETE
$('body').on('click', '.button-delete', function() {
  const id = $(this).attr('data-id');
  console.log(id);

  $.ajax({
      url: `/users/delete/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      success: function() {
        $(`[data-user="${id}"]`).remove();
      }
  });
});

// Event handler for Add User button
$('#submit-user').click(function(e) {
  e.preventDefault();
  addUser();
});

$('#edit-user').click(function(e) {
  e.preventDefault();
  editUser();
});






// END FUNCTION
});

