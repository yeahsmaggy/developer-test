function validateMyForm()
	{
		//declare variables at the top...
		var doberror = '';
		var error = true;

		document.getElementById("radio-error").style.display = 'none';
		document.getElementById("first-name-error").style.display = 'none';
		document.getElementById("first-name").style.border = '1px solid #BBBBBB';

		document.getElementById("last-name-error").style.display = 'none';
		document.getElementById("last-name").style.border = '1px solid #BBBBBB';

		document.getElementById("telephone-number-error").style.display = 'none';
		document.getElementById("telephone-number").style.border = '1px solid #BBBBBB';

		document.getElementById("date-of-birth-error").style.display = 'none';
		document.getElementById("day").style.border = '1px solid #BBBBBB';
		document.getElementById("month").style.border = '1px solid #BBBBBB';
		document.getElementById("year").style.border = '1px solid #BBBBBB';

		var radios = document.getElementsByName("choices");

		for (var i = 0, length = radios.length; i < length; i++) {
		    if (radios[i].checked) {
		        //alert(radios[i].value);
		        error = false;
		        break;
		    }
		}

		if(error){
			error +="\nPlease choose a radio button\n";
			document.getElementById("radio-error").style.display = 'block';
		}

		var firstName = document.getElementById('first-name').value; 
	    if(!firstName.match(/\S/)) {
			error +="Please fill in your first name\n";
			document.getElementById("first-name-error").style.display = 'block';
			document.getElementById("first-name").style.border = '#B10D1E solid 1px';

	    }

		var lastName = document.getElementById('last-name').value; 
	    if(!lastName.match(/\S/)) {
			error +="Please fill in your last name\n";
			document.getElementById("last-name-error").style.display = 'block';
			document.getElementById("last-name").style.border = '#B10D1E solid 1px';

	    }

		var telephone = document.getElementById('telephone-number').value; 
		if((!telephone.match(/\S/)) || (isNaN(telephone))){
			error +="Telephone number must be a number\n";
			document.getElementById("telephone-number-error").style.display = 'block';
			document.getElementById("telephone-number").style.border = '#B10D1E solid 1px';

		}

		var day = document.getElementById('day').value;
		if((!day.match(/\S/)) || (isNaN(day))){
			error +="Day must be a number\n";
			doberror="Day must be a number<br>";
			document.getElementById("date-of-birth-error").style.display = 'block';
			document.getElementById("date-of-birth-error").innerHTML = doberror;
			document.getElementById("day").style.border = '#B10D1E solid 1px';
		}

		var month = document.getElementById('month').value;
		if((!month.match(/\S/)) || (isNaN(month))){
			error +="Month must be a number\n";
			doberror+="Month must be a number<br>";
			document.getElementById("date-of-birth-error").style.display = 'block';
			document.getElementById("date-of-birth-error").innerHTML = doberror;
			document.getElementById("month").style.border = '#B10D1E solid 1px';
		}

		var year = document.getElementById('year').value;
		if((!year.match(/\S/)) || (isNaN(year))){
			error +="Year must be a number\n";
			doberror+="Year must be a number<br>";
			document.getElementById("date-of-birth-error").style.display = 'block';
			document.getElementById("date-of-birth-error").innerHTML = doberror;
			document.getElementById("year").style.border = '#B10D1E solid 1px';
		}


		if(!isValidDate(day,month,year)){
			//output the message saying the date should be in the right format
			error +="Date is not in the correct format\n";
			doberror +="Date is not in the correct format<br>";
			document.getElementById("date-of-birth-error").style.display = 'block';
			document.getElementById("date-of-birth-error").innerHTML = doberror;
			document.getElementById("day").style.border = '#B10D1E solid 1px';
			document.getElementById("month").style.border = '#B10D1E solid 1px';
			document.getElementById("year").style.border = '#B10D1E solid 1px';
		}


		if(error)
		{ 
			console.log(error);
			event.preventDefault();
			return false;
		}

	return true;

	}


function isValidDate(day,month,year)
{

    // Parse the date parts to integers
    var day = parseInt(day, 10);
    var month = parseInt(month, 10);
    var year = parseInt(year, 10);

    //Check the ranges of month and year
    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
};
