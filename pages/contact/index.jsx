import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Briefcase, FileText, Loader2, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { fadeIn } from '../../variants';

const Contact = () => {
	const [status, setStatus] = useState({
		submitting: false,
		info: { error: false, msg: null },
	});
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setStatus({ ...status, submitting: true });

		const myForm = event.target;
		const submitData = new FormData(myForm);

		fetch('/__forms.html', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(submitData).toString(),
		})
			.then((res) => {
				if (res.status === 200) {
					alert('Message sent successfully! I will get back to you soon.');
					myForm.reset();
					setFormData({ name: '', email: '', subject: '', message: '' });
				}
			})
			.catch((error) => console.log(error))
			.finally(() => setStatus({ ...status, submitting: false }));
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

						<h2 className="text-[40px] leading-tight md:text-[54px] md:leading-[1.2] font-bold text-slate-900 dark:text-white mb-6">
							Let's{' '}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 dark:from-red-400 dark:to-orange-500">connect.</span>{' '}
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
								{/* Full Name Input */}
								<div className="relative group/input w-full">
									<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
										<User className="w-5 h-5 text-gray-500 group-focus-within/input:text-sky-500 dark:group-focus-within/input:text-red-500 transition-colors" />
									</div>
									<input
										type="text"
										name="name"
										value={formData.name}
										onChange={handleChange}
										placeholder="Full Name *"
										required
										className="w-full h-14 bg-white/50 dark:bg-black/30 border border-black/10 dark:border-white/10 focus:border-sky-400 dark:focus:border-red-400 focus:bg-sky-500/5 dark:focus:bg-red-500/5 text-slate-800 dark:text-white pl-12 pr-4 rounded-xl outline-none transition-all duration-300 placeholder:text-slate-400 placeholder:dark:text-gray-500"
									/>
								</div>

								{/* Email Input */}
								<div className="relative group/input w-full">
									<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
										<Mail className="w-5 h-5 text-gray-500 group-focus-within/input:text-sky-500 dark:group-focus-within/input:text-red-500 transition-colors" />
									</div>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										placeholder="Email Address *"
										required
										className="w-full h-14 bg-white/50 dark:bg-black/30 border border-black/10 dark:border-white/10 focus:border-sky-400 dark:focus:border-red-400 focus:bg-sky-500/5 dark:focus:bg-red-500/5 text-slate-800 dark:text-white pl-12 pr-4 rounded-xl outline-none transition-all duration-300 placeholder:text-slate-400 placeholder:dark:text-gray-500"
									/>
								</div>
							</div>

							{/* Subject Input */}
							<div className="relative group/input">
								<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
									<FileText className="w-5 h-5 text-gray-500 group-focus-within/input:text-sky-500 dark:group-focus-within/input:text-red-500 transition-colors" />
								</div>
								<input
									type="text"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									placeholder="Subject (Optional)"
									className="w-full h-14 bg-white/50 dark:bg-black/30 border border-black/10 dark:border-white/10 focus:border-sky-400 dark:focus:border-red-400 focus:bg-sky-500/5 dark:focus:bg-red-500/5 text-slate-800 dark:text-white pl-12 pr-4 rounded-xl outline-none transition-all duration-300 placeholder:text-slate-400 placeholder:dark:text-gray-500"
								/>
							</div>

							{/* Message Textarea */}
							<div className="relative group/input">
								<div className="absolute top-4 left-0 pl-4 pointer-events-none">
									<MessageSquare className="w-5 h-5 text-gray-500 group-focus-within/input:text-sky-500 dark:group-focus-within/input:text-red-500 transition-colors" />
								</div>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleChange}
									placeholder="Tell me about your project..."
									required
									className="w-full h-40 bg-white/50 dark:bg-black/30 border border-black/10 dark:border-white/10 focus:border-sky-400 dark:focus:border-red-400 focus:bg-sky-500/5 dark:focus:bg-red-500/5 text-slate-800 dark:text-white pl-12 pr-4 pt-4 rounded-xl outline-none transition-all duration-300 placeholder:text-slate-400 placeholder:dark:text-gray-500 resize-none"
								></textarea>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								disabled={status.submitting}
								className="group relative w-full h-14 bg-sky-500 hover:bg-sky-600 dark:bg-red-600 dark:hover:bg-red-700 text-white rounded-xl font-medium transition-all duration-300 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_20px_-5px_rgba(14,165,233,0.5)] dark:shadow-[0_4px_20px_-5px_rgba(239,68,68,0.5)]"
							>
								<span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white">
									{status.submitting ? (
										<Loader2 className="animate-spin h-5 w-5 text-white" />
									) : (
										<>
											Send Message
											<Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
										</>
									)}
								</span>
							</button>

							{/* WhatsApp Button */}
							<button
								type="button"
								onClick={() => window.open('https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER_HERE', '_blank')}
								className="group relative w-full sm:w-auto h-14 px-8 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/50 rounded-xl font-medium transition-all duration-300 overflow-hidden flex items-center justify-center"
							>
								<span className="relative z-10 flex items-center gap-2 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
									<MessageCircle className="w-5 h-5 text-[#25D366]" />
									<span className="text-[#25D366]">Chat on WhatsApp</span>
								</span>
							</button>
						</form>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
