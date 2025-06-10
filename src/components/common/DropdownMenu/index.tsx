import React from "react";
import { Menu, Button, Text, rem } from "@mantine/core";
import clsx from "clsx";

interface MenuItem {
  label: string;
  imageUrl?: string; // Replaces leftIcon
  rightText?: React.ReactNode;
  color?: string;
}

interface MenuSection {
  label?: string;
  items: MenuItem[];
  divider?: boolean;
}

interface DropdownMenuProps {
  buttonLabel?: string;
  menuData: MenuSection[];
}

export default function DropdownMenu({
  buttonLabel = "Toggle menu",
  menuData,
}: DropdownMenuProps) {
  return (
    <Menu
      shadow="md"
      width={250}
      trigger="hover"
      openDelay={100}
      closeDelay={400}
    >
      <Menu.Target>
        <Button>{buttonLabel}</Button>
      </Menu.Target>

      {/* ✅ Fix here: use className instead of classNames, and fix clsx syntax */}
      <Menu.Dropdown
        className={clsx('custom-dropdown', {
          'border-none': true, // This will always apply "border-none"
        })}
      >
        {menuData.map(({ label, items, divider }, i) => (
          <div key={i}>
            {label && <Menu.Label>{label}</Menu.Label>}
            {items.map(({ label, imageUrl, rightText, color }, idx) => (
              <Menu.Item
                key={idx}
                leftSection={
                  imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={label}
                      style={{
                        width: rem(24),
                        height: rem(24),
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                    />
                  ) : null
                }
                rightSection={
                  rightText ? (
                    <Text size="xs" c="dimmed">
                      {rightText}
                    </Text>
                  ) : null
                }
                color={color}
                classNames={{
                    item:'px-3.5 py-2.5'
                }}
              >
               <Text className="text-sm text-black font-medium">{label}</Text>
              </Menu.Item>
            ))}
            {divider && <Menu.Divider />}
          </div>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
