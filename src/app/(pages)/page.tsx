import { FaFire } from "react-icons/fa";
import DashboardValue from "../components/dashboard-value";
import ValueList from "../components/value-list";
import { getStatistics } from "../utils/service";
import { FaTicket } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";

const Home = async () => {
  const data = await getStatistics();

  return (
    <div className="flex flex-col gap-10 pt-5">
      <div className="xl:flex">
        <DashboardValue
          icon={<FaTicket className="text-blue-500" />}
          title="Toplam Ticket"
          value={data.totalTickets}
        />
        <DashboardValue
          icon={<FaFire className="text-red-500" />}
          title="Toplam Öncelik"
          value={data.averagePriority}
        />
        <DashboardValue
          icon={<IoShieldCheckmark className="text-green-500" />}
          title="Toplam İlerleme"
          value={data.averageProgress + "%"}
        />
      </div>
      <ValueList title="Kategori Özeti" arr={data.ticketsByCategory} />

      <ValueList title="Durum Özeti" arr={data.ticketsBystatus} />
    </div>
  );
};

export default Home;
