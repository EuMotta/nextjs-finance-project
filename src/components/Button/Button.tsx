import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';

import styles from './Button.module.css';

interface Button {
  children?: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  styled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  link?: boolean;
  outline?: boolean;
  target?: string;
  onClick?: () => void;
}
const Button = ({
  children,
  href,
  styled,
  className,
  icon,
  link,
  outline,
  ...rest
}: Button) => {
  let buttonClassName = ` ${styles.button} btn`;
  if (icon) {
    buttonClassName += ` ${styles.icon}`;
  }
  if (link) {
    buttonClassName += ` ${styles.link}`;
  }
  if (outline) {
    buttonClassName += ` ${styles.outline}`;
  }
  if (className) {
    buttonClassName = ` ${buttonClassName} ${className} `;
  }

  const buttonProps = {
    className: buttonClassName,
    ...rest,
  };
  if (styled) {
    return (
      <Button
        className="items-baseline font-medium leading-tight focus-visible:text-secondary  group/link text-base"
        href={href}
        target="_blank"
      >
        <span>
          {children}
          <span className="inline-block">
            <MdArrowOutward className="inline-block mb-1 h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
          </span>
        </span>
      </Button>
    );
  }
  if (href) {
    if (href.startsWith('/')) {
      return (
        <Link href={href} {...buttonProps}>
          {icon} {children}
        </Link>
      );
    }
    return (
      <a href={href} {...buttonProps}>
        {icon} {children}
      </a>
    );
  }

  return (
    <button {...buttonProps}>
      {icon} {children}
    </button>
  );
};

export default Button;
