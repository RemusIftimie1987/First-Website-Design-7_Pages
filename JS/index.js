var x = 0;
var i = 0;
        //alert('value of x is' + x);
        function runSomeTestData() {
            x++;
            alert('the value of x is ' + x);
            var genius = confirm('Are you a computer genius');
            var name = prompt('OK then fine!  Whats your name?');
            if (genius) {
                alert('Thanks ' + name + ', I will come to you for advice');
            }
            else {
                alert('No problem. Thanks for your help');
            }
            console.log(genius);
            console.log(name);
        }

        function incrementNumber() {
             i++;
        document.getElementsByClassName('item1')[0].innerHTML = i;
        }

        function squareNumbers() {
            var toSquare = parseInt(document.getElementById('test-data').innerHTML);
            document.getElementById('test-data').innerHTML = (toSquare*toSquare);
        }

        function displayOnDiv() {
           
        }