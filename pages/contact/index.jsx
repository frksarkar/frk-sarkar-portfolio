import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Briefcase } from 'lucide-react';
import { useState } from 'react';
import { fadeIn } from '../../variants';

const Contact = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [focusedInput, setFocusedInput] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsLoading(true);

		const myForm = event.target;
		const formData = new FormData(myForm);

		fetch('/__forms.html', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString(),
		})
			.then((res) => {
				if (res.status === 200) {
					alert('Message sent successfully! I will get back to you soon.');
					myForm.reset();
				}
			})
			.catch((error) => console.log(error))
			.finally(() => setIsLoading(false));
	};

	return (
		<div className="flex-1 w-full flex flex-col items-center justify-center bg-lightPrimary dark:bg-primary/30 transition-colors duration-300 relative overflow-x-hidden pt-32 pb-16 min-h-screen">
			<div className="container mx-auto flex flex-col items-center justify-center w-full">
				<div className="flex flex-col xl:flex-row w-full gap-x-12 xl:gap-x-24 items-center justify-between relative z-10">
					{/* Left Side: Text and Connect Intro */}
					<motion.div
						variants={fadeIn('right', 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="flex-1 flex flex-col justify-center text-center xl:text-left mb-12 xl:mb-0 max-w-[500px]"
					>
						<div className="inline-flex items-center justify-center xl:justify-start gap-2 mb-6">
							<span className="w-8 h-[2px] bg-sky-500 dark:bg-red-500 rounded-full" />
							<span className="text-sky-500 dark:text-red-500 font-medium tracking-wider uppercase text-sm">Say Hello</span>
						</div>

						<h2 className="text-[40px] leading-tight md:text-[54px] md:leading-[1.2] font-bold text-white mb-6">
							Let's build something{' '}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 dark:from-red-400 dark:to-orange-500">beautiful</span>{' '}
							together.
						</h2>

						<p className="text-gray-300/80 leading-relaxed font-light text-lg mb-8">
							I'm currently available for freelance work and new opportunities. Whether you have a project to discuss or just want to say hi, my inbox is open.
						</p>

						{/* Small decorative elements */}
						<div className="hidden xl:flex items-center gap-6 mt-4">
							<div className="flex -space-x-3">
								<div className="w-10 h-10 rounded-full bg-sky-500/10 dark:bg-red-500/10 border border-sky-400/20 dark:border-red-500/20 flex items-center justify-center z-30 backdrop-blur-sm">
									<User className="w-4 h-4 text-sky-400 dark:text-red-400" />
								</div>
								<div className="w-10 h-10 rounded-full bg-[#082f49] dark:bg-black border border-sky-400/20 dark:border-red-500/20 flex items-center justify-center z-20">
									<Mail className="w-4 h-4 text-gray-400" />
								</div>
								<div className="w-10 h-10 rounded-full bg-[#0c4a6e] dark:bg-primary border border-sky-400/20 dark:border-red-500/20 flex items-center justify-center z-10">
									<MessageSquare className="w-4 h-4 text-gray-400" />
								</div>
							</div>
							<p className="text-sm text-gray-400 font-medium">Fast & reliable communication.</p>
						</div>
					</motion.div>

					{/* Right Side: Modern Glass Form */}
					<motion.div variants={fadeIn('left', 0.4)} initial="hidden" animate="show" exit="hidden" className="flex-1 w-full max-w-[600px] relative">
						{/* Ambient Glow behind form */}
						<div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/20 to-blue-600/20 dark:from-red-500/20 dark:to-orange-600/20 blur-2xl rounded-[40px] z-0 pointer-events-none" />

						<form
							onSubmit={handleSubmit}
							autoComplete="off"
							name="contact"
							className="relative z-10 p-8 sm:p-10 bg-white/5 dark:bg-[#131424]/50 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-3xl shadow-2xl flex flex-col gap-6"
						>
							<input type="hidden" name="form-name" value="contact" />

							<div className="flex flex-col sm:flex-row gap-6 w-full">
								{/* Name Input */}
								<div className="relative w-full group">
									<div
										className={`absolute inset-y-0 left-4 flex items-center pointer-events-none transition-colors duration-300 ${focusedInput === 'name' ? 'text-sky-400 dark:text-red-400' : 'text-gray-400'}`}
									>
										<User className="w-5 h-5" />
									</div>
									<input
										type="text"
										name="name"
										placeholder="Full Name"
										onFocus={() => setFocusedInput('name')}
										onBlur={() => setFocusedInput(null)}
										className="w-full h-14 bg-[#082f49]/30 dark:bg-black/30 border border-white/10 focus:border-sky-400 dark:focus:border-red-400 focus:bg-sky-500/5 dark:focus:bg-red-500/5 text-white pl-12 pr-4 rounded-xl outline-none transition-all duration-300 placeholder:text-gray-500"
										required
									/>
								</div>

								{/* Email Input */}
								<div className="relative w-full group">
									<div
										className={`absolute inset-y-0 left-4 flex items-center pointer-events-none transition-colors duration-300 ${focusedInput === 'email' ? 'text-sky-400 dark:text-red-400' : 'text-gray-400'}`}
									>
										<Mail className="w-5 h-5" />
									</div>
									<input
										type="email"
										name="email"
										placeholder="Email Address"
										onFocus={() => setFocusedInput('email')}
										onBlur={() => setFocusedInput(null)}
										className="w-full h-14 bg-[#082f49]/30 dark:bg-black/30 border border-white/10 focus:border-sky-400 dark:focus:border-red-400 focus:bg-sky-500/5 dark:focus:bg-red-500/5 text-white pl-12 pr-4 rounded-xl outline-none transition-all duration-300 placeholder:text-gray-500"
										required
									/>
								</div>
							</div>

							{/* Subject Input */}
							<div className="relative w-full group">
								<div
									className={`absolute inset-y-0 left-4 flex items-center pointer-events-none transition-colors duration-300 ${focusedInput === 'subject' ? 'text-sky-400 dark:text-red-400' : 'text-gray-400'}`}
								>
									<Briefcase className="w-5 h-5" />
								</div>
								<input
									type="text"
									name="subject"
									placeholder="Project Subject"
									onFocus={() => setFocusedInput('subject')}
									onBlur={() => setFocusedInput(null)}
									className="w-full h-14 bg-[#082f49]/30 dark:bg-black/30 border border-white/10 focus:border-sky-400 dark:focus:border-red-400 focus:bg-sky-500/5 dark:focus:bg-red-500/5 text-white pl-12 pr-4 rounded-xl outline-none transition-all duration-300 placeholder:text-gray-500"
									required
								/>
							</div>

							{/* Message Input */}
							<div className="relative w-full group">
								<div
									className={`absolute top-4 left-4 pointer-events-none transition-colors duration-300 ${focusedInput === 'message' ? 'text-sky-400 dark:text-red-400' : 'text-gray-400'}`}
								>
									<MessageSquare className="w-5 h-5" />
								</div>
								<textarea
									name="message"
									placeholder="Tell me about your project..."
									onFocus={() => setFocusedInput('message')}
									onBlur={() => setFocusedInput(null)}
									className="w-full h-40 bg-[#082f49]/30 dark:bg-black/30 border border-white/10 focus:border-sky-400 dark:focus:border-red-400 focus:bg-sky-500/5 dark:focus:bg-red-500/5 text-white pl-12 pr-4 pt-4 rounded-xl outline-none transition-all duration-300 placeholder:text-gray-500 resize-none"
									required
								/>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								disabled={isLoading}
								className="group relative flex items-center justify-center gap-3 w-full h-14 mt-2 bg-white text-gray-900 font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] disabled:opacity-70 disabled:hover:scale-100"
							>
								{/* Button hover gradient */}
								<div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 dark:from-red-500 dark:to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

								{isLoading ? (
									<span className="relative z-10 flex items-center gap-2 group-hover:text-white">
										<svg
											className="animate-spin h-5 w-5 text-gray-900 group-hover:text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
										Sending...
									</span>
								) : (
									<span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
										Send Message
										<Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
									</span>
								)}
							</button>
						</form>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
