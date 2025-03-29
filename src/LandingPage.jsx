import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./styles/LandingPage.css";
import NavBar from "./NavBar";

const LandingPage = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("animate");
                            observer.unobserve(entry.target); // Stop observing after animating
                        }
                    });
                },
                { threshold: 0.5 }
            );

            const elements = document.querySelectorAll(".animate_on_scroll, .about-btn, .description");
            elements.forEach((el) => observer.observe(el));

            return () => observer.disconnect(); // Cleanup observer
        }
    }, []); // Runs only once after mount

    return (
        <div className="landing-page">
            <NavBar />
            <div className="landing-content">
                <div id="home">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="headline"
                    >
                        Welcome to <span className="highlight">BityBank</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="subheadline"
                    >
                        Your best saving service
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="description"
                    >
                        Save smarter, grow wealth, and manage finances with ease. Join thousands of users making the most of their money with BityBank.
                    </motion.p>

                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="cta-button">
                        <Link to="/signup" className="cta-link">Get Started</Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="illustration-container"
                    >
                        <div style={{ fontSize: "30px" }} className="material-symbols-outlined">account_balance</div>
                    </motion.div>
                </div>

                {/* About Section */}
                <div id="about" className="about-page">
                    <div className="about-content">
                        <h1 className="animate_on_scroll">About BityBank</h1>
                        <p className="description">
                        BityBank is your secure and modern digital banking solution. 
                        We provide seamless, fast, and reliable financial services to help you manage your funds with ease. 
                        Whether you're saving, sending money, or making payments, BityBank simplifies your financial life.
                        </p>
                        <p className="description">
                        With a strong focus on security and user experience, 
                        we use advanced encryption and authentication measures to ensure your transactions remain safe and hassle-free. 
                        Our smart banking tools help you track expenses, automate savings, and grow your wealth effortlessly.
                        </p>
                        <p className="description">
                            Join thousands of users taking control of their finances with BityBank today!
                        </p>
                        <div className="cta-button about-btn">
                            <Link to="/signup" className="cta-link">Get Started</Link>
                        </div>
                    </div>
                </div>

                <div id="contact" className="contact-page">
                    <div className="contact-content">
                        <h1 className="animate_on_scroll">Contact Us</h1>
                        <p className="description">
                            Have questions or need assistance? Reach out to us, and we'll be happy to help!
                        </p>
                        <p className="description">📞 Call/WhatsApp: <a href="tel:+233547714953">+233 54 771 4953</a></p>
                        <div className="cta-button">
                            <a href="mailto:agbozovictor73@gmail.com" className="cta-link">Email Us</a>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default LandingPage;
