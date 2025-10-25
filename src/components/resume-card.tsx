"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const MAX_BADGES_TO_SHOW = 3;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex flex-col sm:flex-row">
        <div className="flex-none sm:self-center p-2 sm:p-0">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow sm:ml-4 ml-0 group">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-x-2 gap-y-1 text-base">
              <h3 className="inline-flex items-center justify-start font-semibold leading-none text-xs sm:text-sm flex-wrap">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1 flex-wrap">
                    {badges.slice(0, MAX_BADGES_TO_SHOW).map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs truncate max-w-[140px]"
                        title={badge}
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                    {badges.length > MAX_BADGES_TO_SHOW && (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key="more"
                      >
                        +{badges.length - MAX_BADGES_TO_SHOW}
                      </Badge>
                    )}
                  </span>
                )}
                <FaChevronRight
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-left sm:text-right self-start sm:self-auto">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm"
            >
              {description}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};
