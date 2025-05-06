

function scrollToBooking() {
    console.log('click oise')
    document.getElementById('Booking').scrollIntoView({ behavior: 'smooth' });
}

function Available_seat() {
    const name = document.getElementById('Available_seat');
    let innerText = parseInt(name.innerText, 10);
    console.log("Available seats before:", innerText);
    innerText = innerText - 1;
    name.innerText = innerText;
    console.log("Available seats after:", innerText);
}

function Seat_booking(event) {
    const name = document.getElementById('seat_booking');

    name.innerHTML += `
        <div class="flex justify-between">
            <p>${event}</p>
            <p>Economy</p>
            <p>550</p>
        </div>
        
    `;
}

let BookingCount = 0;

function Booking(event) {
    console.log('click oise mama');

    if (BookingCount >= 4) {
        console.log('you can only book 4seats!')
        return;
    }
    const seat = event.target;
    console.log(seat.innerText)
    seat.classList.remove('bg-gray-200');
    seat.classList.add('bg-green-400');
    BookingCount++;
    console.log(`you are booking ${BookingCount} seats`)
    Available_seat()
    Seat_booking(seat.innerText)
    totall_price()
}


function totall_price() {
    const name = document.getElementById('totall_price');
    let currentPrice = parseInt(name.innerText, 10) || 0;
    let newPrice = currentPrice + 550;
    name.innerText = newPrice;
    console.log(newPrice, 'total price');
}
function Discount() {
    const totalPriceElement = document.getElementById('totall_price');
    const codeInput = document.getElementById('code');
    const grand = document.getElementById('grand')

    const couponCode = codeInput.value.trim(); // remove whitespace
    let grandPrice = parseInt(grand.innerText, 0)
    let totalPrice = parseInt(totalPriceElement.innerText, 10);

    if (couponCode === "NEW15") {
        const discount = totalPrice * 0.15;
        const discountedPrice = totalPrice - discount;
        const final = totalPriceElement.innerText = Math.round(discountedPrice);
        grand.innerText = final
        // show discounted price
        alert(" Coupon applied! 15% discount given.");
        console.log(final)
    } else {
        alert("Invalid coupon code.");
    }
    if (couponCode === "COUPLE20") {
        const discount = totalPrice * 0.20;
        const discountedPrice = totalPrice - discount;
        const final = totalPriceElement.innerText = Math.round(discountedPrice);
        grand.innerText = final
        // show discounted price
        alert(" Coupon applied! 20% discount given.");
        console.log(final)
    } else {
        alert("Invalid coupon code.");
    }
}



function Success(){
    console.log('okay')
    document.getElementById('body').classList.add('hidden')
    document.getElementById('successSection').classList.remove('hidden')
}






