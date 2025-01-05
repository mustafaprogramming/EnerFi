import Link from "next/link";

export default function SubMenu({ data, location, subMenuOpen }) {
  if (!data || data.length === 0) {
    return null; // Return nothing if there is no data
  }

  // Dynamic grid style based on the number of items
  const style = data.length === 1
    ? "grid-cols-[150px]"
    : data.length === 2
    ? "grid-cols-[150px_150px]"
    : data.length === 3
    ? "grid-cols-[150px_150px_150px]"
    : "grid-cols-[150px_150px_150px_150px]";

  return (
    <aside
      className={`${subMenuOpen ? "md:grid" : ""} hidden fixed ${style} px-8 py-5 rounded-md gap-10 transition-all duration-500 border border-[#0AE106] shadow-lg z-[31] w-fit submenu`}
      style={{
        left: `${location.center}px`,
        top: `${location.bottom}px`,
        transform: 'translateX(-50%)',
      }}
      aria-expanded={subMenuOpen} // Add accessibility
      role="menu"
    >
      <div className="backdrop-blur-3xl absolute w-full h-full -z-[1] rounded-md submenu"></div>

      {data.map((item, ind) => {
        const { title, links } = item;
        return (
          <div key={ind} className="flex flex-col gap-1 submenu ">
            <h6 className="font-semibold text-base submenu ">{title}</h6>
            <ul className="flex flex-col text-sm submenu ">
              {links.map((link, ind) => (
                <li key={ind} className="submenu">
                  <Link
                    href={link.link}
                    className="truncate hover:text-[#0AE106] transition-colors opacity-60 hover:opacity-100 submenu "
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}

      <span className="w-[20px] h-[20px] rotate-45 border border-[#0AE106] border-b-0 border-r-0 left-[50%] -translate-x-[50%] -top-[11px] absolute triangle-gradient submenu"></span>
    </aside>
  );
}
