import { X } from "lucide-react";
import { Button } from "../Button/Button";
import styles from "./privacyModal.module.css";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;
  return (
    <div className={`${styles.overlay}`}>
      <div className={`${styles.modalBox}`}>
        {/* Header */}
        <div className={`${styles.modalHeader}`}>
          <h2>Privacy Policy</h2>
          <button onClick={onClose} className={`${styles.closeButton}`}>
            <X />
          </button>
        </div>

        {/* Content */}
        <div className={`${styles.modalContent}`}>
          <div>
            <p>Last Updated: February 14, 2026</p>
            <p>
              At TechStore, we are committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or make a
              purchase.
            </p>
          </div>

          <div>
            <h3 className="color-black">1. Information We Collect</h3>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul>
              <li>
                Personal identification information (name, email address, phone
                number)
              </li>
              <li>Billing and shipping addresses</li>
              <li>
                Payment information (processed securely by our payment partners)
              </li>
              <li>Account credentials (username and password)</li>
              <li>Purchase history and preferences</li>
              <li>Communications with our customer service team</li>
            </ul>
          </div>

          <div>
            <h3 className="color-black">
              2. Automatically Collected Information
            </h3>
            <p>
              When you visit our website, we automatically collect certain
              information about your device, including:
            </p>
            <ul>
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          <div>
            <h3 className="color-black">3. How We Use Your Information</h3>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul>
              <li>Processing and fulfilling your orders</li>
              <li>Sending order confirmations and shipping updates</li>
              <li>Providing customer support and responding to inquiries</li>
              <li>Personalizing your shopping experience</li>
              <li>Improving our website and services</li>
              <li>Sending promotional emails (with your consent)</li>
              <li>Detecting and preventing fraud</li>
              <li>Complying with legal obligations</li>
            </ul>
          </div>

          <div>
            <h3 className="color-black">
              4. Cookies and Tracking Technologies
            </h3>
            <p>
              We use cookies and similar tracking technologies to enhance your
              browsing experience. Cookies are small data files stored on your
              device. We use the following types of cookies:
            </p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> Required for the website to
                function properly
              </li>
              <li>
                <strong>Performance Cookies:</strong> Help us understand how
                visitors interact with our website
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember your preferences
                and settings
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Track your browsing to show
                relevant ads
              </li>
            </ul>
            <p>
              You can control cookies through your browser settings, but
              disabling some cookies may affect website functionality.
            </p>
          </div>

          <div>
            <h3 className="color-black">5. Sharing Your Information</h3>
            <p>
              We do not sell your personal information. We may share your
              information with:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Payment processors, shipping
                companies, email service providers
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a
                merger, sale, or acquisition
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights
              </li>
              <li>
                <strong>With Your Consent:</strong> When you explicitly agree to
                share information
              </li>
            </ul>
          </div>

          <div>
            <h3 className="color-black">6. Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information, including:
            </p>
            <ul>
              <li>SSL encryption for data transmission</li>
              <li>Secure servers and databases</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>
            <p>
              However, no method of transmission over the internet is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h3 className="color-black">7. Your Privacy Rights</h3>
            <p>
              Depending on your location, you may have the following rights:
            </p>
            <ul>
              <li>
                <strong>Access:</strong> Request a copy of your personal data
              </li>
              <li>
                <strong>Correction:</strong> Update or correct inaccurate
                information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                data
              </li>
              <li>
                <strong>Portability:</strong> Receive your data in a structured
                format
              </li>
              <li>
                <strong>Objection:</strong> Object to certain processing
                activities
              </li>
              <li>
                <strong>Opt-out:</strong> Unsubscribe from marketing
                communications
              </li>
            </ul>
            <p>
              To exercise these rights, please contact us at
              privacy@techstore.com.
            </p>
          </div>

          <div>
            <h3 className="color-black">8. Data Retention</h3>
            <p>
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required by law. After this period, we
              will securely delete or anonymize your information.
            </p>
          </div>

          <div>
            <h3 className="color-black">9. Children's Privacy</h3>
            <p>
              Our website is not intended for children under the age of 13. We
              do not knowingly collect personal information from children under
              13. If you believe we have collected information from a child,
              please contact us immediately.
            </p>
          </div>

          <div>
            <h3 className="color-black">10. Third-Party Links</h3>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these websites. We
              encourage you to review their privacy policies before providing
              any information.
            </p>
          </div>

          <div>
            <h3 className="color-black">11. International Data Transfers</h3>
            <p>
              Your information may be transferred to and processed in countries
              other than your own. We ensure appropriate safeguards are in place
              to protect your data in accordance with this Privacy Policy and
              applicable laws.
            </p>
          </div>

          <div>
            <h3 className="color-black">12. Changes to This Privacy Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the new Privacy
              Policy on this page and updating the "Last Updated" date. We
              encourage you to review this Privacy Policy periodically.
            </p>
          </div>

          <div>
            <h3 className="color-black">13. Contact Us</h3>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us:
            </p>
            <div>
              <p>Email: privacy@techstore.com</p>
              <p>Phone: 1-800-TECH-STORE</p>
              <p>Address: 123 Tech Avenue, San Francisco, CA 94105</p>
            </div>
          </div>

          <div>
            <p>
              <strong>Note:</strong> By using our website and services, you
              acknowledge that you have read and understood this Privacy Policy
              and agree to the collection, use, and disclosure of your
              information as described herein.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className={`${styles.modalFooter}`}>
          <Button className="w-full" onClick={onClose}>
            I Understand
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PrivacyModal;
