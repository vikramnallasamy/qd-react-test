import CouponDiscount from '../icons/Coupon Discount.svg';
import customer from '../icons/customer.svg';
import filter from '../icons/filter.svg';
import NotificationBell from '../icons/Notification Bell.svg';
import orders from '../icons/orders.svg';
import Package from '../icons/Package.svg';
import pen from '../icons/pen.svg';
import plus from '../icons/plus.svg';
import SEARCH from '../icons/SEARCH.svg';
import seettings from '../icons/seettings.svg';
import threedots from '../icons/threedots.svg';
import user from '../icons/user.svg';

export default function IconsPalette() {
return (
	<div>
		<img title='Coupon Discount' src={CouponDiscount} />
		<img title='customer' src={customer} />
		<img title='filter' src={filter} />
		<img title='Notification Bell' src={NotificationBell} />
		<img title='orders' src={orders} />
		<img title='Package' src={Package} />
		<img title='pen' src={pen} />
		<img title='plus' src={plus} />
		<img title='SEARCH' src={SEARCH} />
		<img title='seettings' src={seettings} />
		<img title='threedots' src={threedots} />
		<img title='user' src={user} />
		
	</div>)
}

export {
	CouponDiscount,
	customer,
	filter,
	NotificationBell,
	orders,
	Package,
	pen,
	plus,
	SEARCH,
	seettings,
	threedots,
	user
}