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
		<img alt='Coupon' title='Coupon Discount' src={CouponDiscount} />
		<img alt='customer' title='customer' src={customer} />
		<img alt='filter' title='filter' src={filter} />
		<img alt='Notification' title='Notification Bell' src={NotificationBell} />
		<img alt='orders' title='orders' src={orders} />
		<img alt='Package' title='Package' src={Package} />
		<img alt='pen' title='pen' src={pen} />
		<img alt='plus' title='plus' src={plus} />
		<img alt='SEARCH' title='SEARCH' src={SEARCH} />
		<img alt='seettings' title='seettings' src={seettings} />
		<img alt='threedots' title='threedots' src={threedots} />
		<img alt='user' title='user' src={user} />
		
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