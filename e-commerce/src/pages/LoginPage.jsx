import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { logUser } from "../store/actions/clientActions";
import { useHistory, useLocation } from "react-router-dom";

function LoginPage() {
    const { register, handleSubmit, formState: { errors, isValid }, isSubmitting } = useForm({ mode: "onChange" });
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const submitFn = async (data) => {

        try {
            await dispatch(logUser(data));
            // ProtectedRoute tarafından aktarılan hedef sayfa var mı?
            const destination = location.state?.from;

            if (destination) {
                history.push(destination);
            } else if (window.history.length > 2) {
                history.goBack();
            } else {
                history.push("/");
            }
        } catch (error) {
            console.error(error)
        }
    };
    return (
        <section className="bg-[#FAFAFA]">
            <div className="flex px-9 md:max-w-5xl md:mx-auto lg:px-0 py-24">
                <div className="flex flex-col justify-center items-center w-full max-w-[400px] mx-auto gap-5 p-8 border bg-white shadow-sm rounded-lg border-[#ECECEC]">
                    <div className="flex flex-col w-full gap-2">
                        <h2 className="text-2xl text-center">Sign In</h2>
                        <p className="text-center text-[#737373] font-normal">Enter your credentials to access your account</p>
                    </div>
                    <form
                        onSubmit={handleSubmit(submitFn)}
                        className="flex flex-col w-full items-start justify-center gap-5">
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Please enter a valid email address",
                                    },
                                })}
                                className="text-[#737373] font-normal px-4 py-3 rounded-sm border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full"
                            />
                            {errors.email && <span className="text-xs text-red-400">{errors.email.message}</span>}
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Password"
                                {...register("password", {
                                    required: "Password is required"
                                })}
                                className="text-[#737373] font-normal px-4 py-3 rounded-sm 
                             border border-[#DDDDDD] focus:outline-none focus:border-[#1d91d1] transition-colors duration-200 w-full"
                            />
                            {errors.password && <span className="text-xs text-red-400">{errors.password.message}</span>}
                        </div>
                        <div className="flex flex-row justify-start items-center w-full gap-2">
                            <input type="checkbox" name="remember" {...register("remember")} />
                            <label className="font-normal" htmlFor="remember">Remember me</label>
                        </div>
                        <button
                            type="submit"
                            disabled={!isValid || isSubmitting}
                            className="text-white bg-[#23A6F0] transition-colors duration-300 hover:bg-[#1d91d1] cursor-pointer px-6 py-4 rounded-sm w-full disabled:bg-sky-300 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <div className="flex flex-row justify-center items-center">
                                    <Loader2 className="animate-spin h-5 w-5" />
                                </div>

                            ) : (
                                "Sign In"
                            )}
                        </button>
                    </form>
                </div >
            </div>
        </section>

    )
}
export default LoginPage;