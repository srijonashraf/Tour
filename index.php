<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tourist Bus Rental Service</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="nav">
        <ul>
            <li><a href="index.php">Home</a></li>
            <li> <a href="#">About Us</a></li>
            <li> <a href="#">Contact</a></li>
            <li> <a href="">Sign Up</a></li>
        </ul>
    </div>
    <div class="wrapper">

        <div class="main">
            <div class="left">
                <div class="package">
                    <h3>Day Long Package:</h3>
                    <ul>
                        <li>14,990/Trip</li>
                        <li>29 Seater AC Coaster</li>
                        <li>100KM Roaming</li>
                    </ul>
                </div>

                <form action="index.php" method="post">
                    <input type="date" name="date" id="date" placeholder="Journey Date" required>
                    <input type="text" name="name" id="name" placeholder="Name" required>
                    <input type="text" name="phone" id="phone" placeholder="Phone" required>
                    <input type="text" name="coaster" id="coaster" placeholder="No of Coaster" required>
                    <input type="text" name="days" id="day" placeholder="No of days" required>

                    <div class="btn-group">
                        <button type="submit" name="fare" onclick="fareCalc()" id="fareBtn">Calculate Fare</button>
                        <button type="submit" name="book" id="bookBtn">Book</button>
                    </div>
                </form>

                <div class="memo">
                    <p>Subtotal: <span id="total">0</span><span>$</span></p>
                    <p>Vat (5%): <span id="vat">0</span><span>$</span></p>
                    <p>Grand Total: <span id="grandT">0</span><span>$</span></p>
                </div>
            </div>
            <div class="right" style="display:flex; gap:10px; flex-direction:column;">
                <h1>Tourist Bus Rental Service</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis repellendus libero iste, soluta qui aut sit a incidunt quo maxime, ad voluptas, error nostrum tempore harum exercitationem maiores repellat?
                    Dolore illum quis molestias voluptatibus accusantium quisquam perferendis debitis eligendi voluptates! Voluptatibus, ex magnam ut distinctio at tempore asperiores quasi quidem, mollitia culpa cupiditate veritatis in voluptates est dicta reprehenderit.
                    At quas enim quos explicabo temporibus laborum, error iusto veritatis laudantium impedit provident tempore necessitatibus amet dolorum est doloribus beatae porro reiciendis soluta eaque inventore voluptatum animi ipsum magnam! Odio.
                    Fuga sapiente voluptatum commodi, hic ratione eligendi a, minus blanditiis asperiores molestiae sit quae? Rerum, laboriosam iste. Temporibus, porro inventore. Quia consequuntur asperiores tempora accusantium quod soluta laborum necessitatibus ea!
                    Enim natus maiores expedita veniam eum magnam, incidunt quisquam tempore officia amet! Officia, magnam! Itaque delectus sapiente qui tempore, aliquid ipsum sit dolor, molestias, nemo aperiam saepe maxime ea quaerat.</p>
            </div>
        </div>
        <div class="post">
            <?php
            if (isset($_POST['book'])) { // Check if the "book" button is pressed
                $name = $_POST['name'];
                $phone = $_POST['phone'];
                $coaster = $_POST['coaster'];
                $day = $_POST['days'];

                if (!empty($name) && !empty($phone) && !empty($coaster) && !empty($day)) {
                    echo "<h3>Thanks for Booking with us!</h3>";
                    echo "<p>Name: $name</p>";
                    echo "<p>Phone No: $phone</p>";
                    echo "<p>Coaster: $coaster</p>";
                    echo "<p>Day: $day</p>";
                } else {
                    echo "<p>Please fill all the fields!</p>";
                }
            }

            ?>
        </div>
    </div>
    <footer style="background-color: rgb(7, 169, 197);color:white;text-align:center; padding:1rem;">
        &copy Srijon Ashraf
    </footer>

    <script src="script.js"></script>
</body>

</html>