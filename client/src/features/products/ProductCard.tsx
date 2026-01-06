import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../store/useCart";
import { Product } from "./products.types";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="group">
      <Link to={`/products/${product._id}`} className="block overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-4xl"
        />
      </Link>

      <div className="mt-4 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <Link to={`/products/${product._id}`}>
              <h3 className="text-sm font-medium text-gray-900 hover:underline underline-offset-4 ">
                {product.name}
              </h3>
            </Link>
            <p className="mt-1 text-sm text-gray-700">₦{product.price}</p>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1.5 text-xs text-gray-900 hover:border-gray-900 transition"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
