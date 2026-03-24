import { X } from "lucide-react";
import { Button } from "../Button/Button";
import styles from "./termsModal.module.css";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}
function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null;
  return (
    <div className={`${styles.overlay}`}>
      <div className={`${styles.modalBox}`}>
        {/* Header */}
        <div className={`${styles.modalHeader}`}>
          <h2>Terms of Service</h2>
          <button onClick={onClose} className={`${styles.closeButton}`}>
            <X />
          </button>
        </div>

        {/* Content */}
        <div className={`${styles.modalContent}`}>
          <div>
            <p>Last Updated: February 14, 2026</p>
            <p>
              Welcome to TechStore. By accessing and using our website, you
              agree to be bound by these Terms of Service.
            </p>
          </div>

          <div>
            <h3 className="color-black">1. Acceptance of Terms</h3>
            <p>
              By accessing and using TechStore's services, you accept and agree
              to be bound by the terms and provision of this agreement. If you
              do not agree to abide by the above, please do not use this
              service.
            </p>
          </div>

          <div>
            <h3 className="color-black">2. Use of Service</h3>
            <p>
              You agree to use our service only for lawful purposes and in
              accordance with these Terms. You agree not to:
            </p>
            <ul>
              <li>
                Use the service in any way that violates any applicable law or
                regulation
              </li>
              <li>
                Engage in any conduct that restricts or inhibits anyone's use of
                the service
              </li>
              <li>Transmit any malicious code, viruses, or harmful data</li>
              <li>Impersonate another person or entity</li>
              <li>Interfere with or disrupt the service or servers</li>
            </ul>
          </div>

          <div>
            <h3 className="color-black">3. Account Registration</h3>
            <p>
              To access certain features of our service, you may be required to
              create an account. You agree to:
            </p>
            <ul>
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information to keep it accurate</li>
              <li>Maintain the security of your password</li>
              <li>
                Accept responsibility for all activities under your account
              </li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </div>

          <div>
            <h3 className="color-black">4. Products and Orders</h3>
            <p>
              All product descriptions, pricing, and availability are subject to
              change without notice. We reserve the right to:
            </p>
            <ul>
              <li>Limit quantities of products available for purchase</li>
              <li>Refuse or cancel any order at our discretion</li>
              <li>Verify or correct pricing errors</li>
              <li>
                Require additional verification or information before accepting
                orders
              </li>
            </ul>
          </div>

          <div>
            <h3 className="color-black">5. Payment and Pricing</h3>
            <p>
              All prices are listed in USD. You agree to pay all charges at the
              prices then in effect for your purchases. Payment must be received
              by us before our acceptance of an order. We use secure payment
              processing partners to handle transactions.
            </p>
          </div>

          <div>
            <h3 className="color-black">6. Shipping and Delivery</h3>
            <p>
              We will arrange for shipment of ordered products to you. Title and
              risk of loss pass to you upon delivery to the carrier. Shipping
              times are estimates and are not guaranteed. We are not responsible
              for delays caused by shipping carriers or customs.
            </p>
          </div>

          <div>
            <h3 className="color-black">7. Returns and Refunds</h3>
            <p>
              We accept returns within 30 days of delivery for most products in
              original, unused condition. Refunds will be issued to the original
              payment method. Shipping costs are non-refundable. Some products
              may be non-returnable due to hygiene or safety reasons.
            </p>
          </div>

          <div>
            <h3 className="color-black">8. Intellectual Property</h3>
            <p>
              All content on this website, including text, graphics, logos,
              images, and software, is the property of TechStore or its content
              suppliers and is protected by international copyright laws. You
              may not reproduce, distribute, or create derivative works without
              our express written permission.
            </p>
          </div>

          <div>
            <h3 className="color-black">9. Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by law, TechStore shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use,
              goodwill, or other intangible losses.
            </p>
          </div>

          <div>
            <h3 className="color-black">10. Warranty Disclaimer</h3>
            <p>
              Our service is provided "as is" and "as available" without any
              warranties of any kind, either express or implied. We do not
              warrant that the service will be uninterrupted, secure, or
              error-free.
            </p>
          </div>

          <div>
            <h3 className="color-black">11. Changes to Terms</h3>
            <p>
              We reserve the right to modify these Terms at any time. We will
              notify users of any material changes by posting the new Terms on
              this page and updating the "Last Updated" date. Your continued use
              of the service after changes constitutes acceptance of the
              modified Terms.
            </p>
          </div>

          <div>
            <h3 className="color-black">12. Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the United States, without regard to its conflict of
              law provisions.
            </p>
          </div>

          <div>
            <h3 className="color-black">13. Contact Information</h3>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div>
              <p>Email: legal@techstore.com</p>
              <p>Phone: 1-800-TECH-STORE</p>
              <p>Address: 123 Tech Avenue, San Francisco, CA 94105</p>
            </div>
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

export default TermsModal;
