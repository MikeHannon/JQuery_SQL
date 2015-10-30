/* CRUD Operations */
/* create, read (retrieve), update, destroy (delete) */
/* retrieve */
/* SELECT * FROM db_table; gets all from at database table */
/* SELECT * FROM db_table WHERE id = 1; gets all from db table where id = 1 */
/* create */
/* INSERT INTO db_table (column1,...)VALUES (value1,...);
/* UPDATE */
/* UPDATE db_table SET column1=value1 ... WHERE some_column=some_value; */
/* DELETE FROM db_table WHERE some_column=some_value;*/

/* JOINING TABLES
SELECT column_name(s)
FROM db_table1
LEFT JOIN db_table2
ON table1.column_name=table2.column_name;
*/
var users = [{id: 1, name:'chris', created_at:"today", updated_at:"today"},{id: 2, name:'mike', created_at:"today", updated_at:"today"},{id: 3, name:'mark', created_at:"today", updated_at:"today"},{id: 4, name:'jose', created_at:"yesterday", updated_at:"today"},{id: 5, name:'alyssa', created_at:"today", updated_at:"today"},{id: 6, name:'kenrick', created_at:"today", updated_at:"today"},{id: 7, name:'arthur', created_at:"today", updated_at:"today"},{id: 8, name:'calvin', created_at:"today", updated_at:"today"},{id: 9, name:'michelle', created_at:"today", updated_at:"today"},{id: 10, name:'spencer', created_at:"today", updated_at:"today"}];


function select_all(table){  //SELECT * FROM users;
  return table;
}

function select_where(table,column, selection_criterion){ //SELECT * FROM users where column = criterion.
  var temp = [];
  for (var i = 0; i < table.length; i ++){
    if (table[i][column] == selection_criterion){
      temp.push(table[i]);
    }
  }
  return temp;
}

function create(table, column, information){ //column and information are arrays
  if (column.length == information.length){
    table.push({});
    for(var i = 0; i < column.length; i ++){
      table[table.length-1][column[i]] = information[i];
    }
  }
}

create(users, ['id', 'name', 'created_at', 'updated_at'], [users[users.length-1]['id']+1, 'jeremy', 'today', 'today']);

// INSERT INTO db_table (column1,...)VALUES (value1,...);
console.table(users);
console.log("created new user");

var users_has_books = [{'id': 1, 'user_id':2, 'book_id':4}, {'id': 2, 'user_id':5, 'book_id':3}]
var books = [{id:1, title:"Crime and Punishment"},{id:2, title:"Angle of Repose"},{id:3, title:"Grapes of Wrath"},{id:4, title:"1984"}];

function left_join(table1, table2, table1_column, table2_column){
  var temp = [];
  for (var i = 0; i < table1.length; i ++){
    for (var j = 0; j < table2.length; j ++){
      if(table1[i][table1_column] == table2[j][table2_column]){
        temp.push(table1[i], table2[j]);
      }
    }
  }
  return temp;
}
console.table(left_join(users,users_has_books,"id","user_id"));
console.table(left_join(books,users_has_books,"id","book_id"));
