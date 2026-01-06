import { Link } from "react-router-dom";
import BgImg from "../../assets/herofoodcommerce.png";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={BgImg}
          alt="Amineru Products"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center px-6">
        <h1 className="text-4xl md:text-5xl font-black leading-tight">
          Fresh, Trusted <span className="text-[#009632]">Food Essentials</span>
        </h1>

        <p className="mt-4 text-sm md:text-base text-gray-300">
          Naturally sourced • Quality assured • Delivered with care
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            to="/products"
            className="px-6 py-3 bg-[#009632] text-white text-sm rounded-md hover:opacity-90 transition"
          >
            Shop products
          </Link>

          <Link
            to="/about"
            className="px-6 py-3 border border-white/30 text-sm rounded-md hover:bg-white/10 transition"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
