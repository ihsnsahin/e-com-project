import { AlertCircle, ChevronRight, LayoutGrid, List, Loader2 } from "lucide-react";
import Products from "../components/Products";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Brands from "../components/Brands";
import ShopCategories from "../components/ShopCategories";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setFilter, setOffset } from "../store/actions/productActions";
import { useForm } from "react-hook-form";
import Pagination from "../components/Pagination";


function ShopPage() {
    const { register, handleSubmit, reset } = useForm({
        mode: "onChange",
        defaultValues: {
            sort: "",
            filter: ""
        }
    });
    //Type of List
    const [viewMode, setViewMode] = useState('grid');
    //Unless form values submit, we use default values or last values
    const [appliedFilters, setAppliedFilters] = useState({ filter: "", sort: "" });
    //We are monitoring whether the category ID has changed
    const { categoryId } = useParams();
    const previousCategoryId = useRef(categoryId);
    //Fetch Products
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.productList);
    const total = useSelector((state) => state.product.total);
    const fetchState = useSelector((state) => state.product.fetchState);
    //For pagination use limit from store
    const limit = useSelector((state) => state.product.limit);
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(total / limit);
    const startPage = Math.max(1, Math.min(currentPage - 1, totalPages - 2));
    const pages = Array.from({ length: Math.min(3, totalPages) }, (_, i) => startPage + i);
    //We are controlling all parameters only one place
    const getProducts = (filtersToUse = appliedFilters) => {
        const newOffset = (currentPage - 1) * limit;

        dispatch(setOffset(newOffset));
        dispatch(setFilter(filtersToUse.filter?.trim() || ""));

        const queryParams = {
            limit,
            offset: newOffset
        };

        if (categoryId) {
            queryParams.category = categoryId;
        }

        if (filtersToUse.filter?.trim()) {
            queryParams.filter = filtersToUse.filter.trim();
        }
        if (filtersToUse.sort?.trim()) {
            queryParams.sort = filtersToUse.sort.trim();
        }

        dispatch(fetchProducts(queryParams));
    };

    useEffect(() => {
        const categoryChanged = previousCategoryId.current !== categoryId;
        if (categoryChanged) {
            previousCategoryId.current = categoryId;

            if (currentPage !== 1) {
                setCurrentPage(1);
                return;
            }
        }

        getProducts();

        window.scrollTo({
            top: 0,
        });
    }, [categoryId, currentPage, appliedFilters]);


    const submitFn = (formValues) => {
        setAppliedFilters(formValues);
        if (currentPage !== 1) {
            setCurrentPage(1);
        }
    };

    const handleResetFilters = () => {
        const emptyFilters = {
            sort: "",
            filter: ""
        };
        reset(emptyFilters);
        setAppliedFilters(emptyFilters);
        if (currentPage !== 1) {
            setCurrentPage(1);
        }
    };

    return (
        <>
            <section className="bg-[#FAFAFA] py-8">
                <div className="layout-flex gap-7 sm:flex-row sm:justify-between">
                    <h3 className="text-2xl text-center">Shop</h3>
                    <div className="flex justify-center items-center text-sm">
                        <Link to="/" className="cursor-pointer">Home</Link>
                        <ChevronRight className="w-4 h-4 text-[#BDBDBD]" />
                        <h6 className="text-[#737373]">Shop</h6>
                    </div>
                </div>
            </section>

            <ShopCategories />

            <section className="bg-white py-20">
                <div className="layout-flex gap-12">
                    <div className="flex flex-col items-center justify-center gap-7.5 md:justify-between md:flex-row">
                        <h6 className="text-[#737373]">Showing All {total} Results</h6>
                        <div className="flex flex-row justify-center items-center gap-2">
                            <h6 className="text-[#737373]">Views:</h6>
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 cursor-pointer rounded-md transition-all duration-300 ease-in-out ${viewMode === 'grid'
                                    ? 'bg-[#23A6F0] text-white shadow-md'
                                    : 'hover:shadow-md hover:bg-gray-100 text-[#252B42]'
                                    }`}
                            >
                                <LayoutGrid className={`w-4 h-4 ${viewMode === 'grid' ? 'text-white' : 'text-[#252B42]'}`} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 cursor-pointer rounded-md transition-all duration-300 ease-in-out ${viewMode === 'list'
                                    ? 'bg-[#23A6F0] text-white shadow-md'
                                    : 'hover:shadow-md hover:bg-gray-100 text-[#737373]'
                                    }`}
                            >
                                <List className={`w-4 h-4 ${viewMode === 'list' ? 'text-white' : 'text-[#737373]'}`} />
                            </button>
                        </div>

                        <form className="flex flex-col w-full sm:w-auto sm:flex-row items-center justify-center gap-2"
                            onSubmit={handleSubmit(submitFn)}>
                            <input
                                type="text"
                                placeholder="Search Products"
                                {...register("filter")}
                                className="text-[#737373] font-normal px-4 py-3 rounded-sm bg-[#F9F9F9] border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full sm:w-auto"
                            />
                            <select
                                {...register("sort")}

                                className="text-[#737373] font-normal px-4 py-3 rounded-sm bg-[#F9F9F9] border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full sm:w-auto"
                            >
                                <option value="">Sort By</option>
                                <option value="price:asc">Price: Low to High</option>
                                <option value="price:desc">Price: High to Low</option>
                                <option value="rating:asc">Rating: Low to High</option>
                                <option value="rating:desc">Rating: High to Low</option>
                            </select>
                            <button
                                type="submit"
                                className="text-white bg-[#23A6F0] transition-colors duration-300 hover:bg-[#1d91d1] cursor-pointer px-6 py-3 rounded-sm w-full sm:w-auto"
                            >
                                Filter
                            </button>
                        </form>
                    </div>


                    {fetchState === "FETCHING" && (
                        <div className="flex flex-col justify-center items-center">
                            <Loader2 className="animate-spin h-16 w-16 text-[#23A6F0]" />
                        </div>
                    )}
                    {fetchState === "FAILED" && (
                        <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
                            <div className="p-4 rounded-full bg-red-50 text-red-500">
                                <AlertCircle className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">Failed to Load Products</h4>
                                <p className="text-sm text-gray-500 mt-1">
                                    Something went wrong while fetching the products. Please try again.
                                </p>
                            </div>
                            <button
                                onClick={() => getProducts()}
                                className="px-6 py-2.5 bg-[#23A6F0] text-white rounded-sm hover:bg-[#1d91d1] transition-colors duration-200 text-sm font-medium cursor-pointer"
                            >
                                Try Again
                            </button>
                        </div>
                    )}
                    {fetchState === "FETCHED" && <Products viewMode={viewMode} products={products} onResetFilters={handleResetFilters} />}


                    {totalPages > 1 && <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}
                </div>
            </section >
            <Brands />
        </>

    );
}

export default ShopPage;