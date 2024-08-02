/* eslint-disable react/prop-types */
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineCalendarDays,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
function Stats({ bookings, confirmedStays, numDays, cabinsCount }) {
  //1.number of bookings
  const numBookings = bookings.length;
  //2.total sales
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  //3.total check  inn
  const checkins = confirmedStays.length;

  //4.occupancy rate
  const occupancyRate =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinsCount);

  console.log(occupancyRate);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sale"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy Rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupancyRate * 100) + "%"}
      />
    </>
  );
}
export default Stats;
