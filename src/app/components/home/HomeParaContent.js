"use client";
import { Icons } from "@/assets/icons/icons";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HomeParaContent = () => {

  const contentData = [
    {
      id: 1,
      title: "TV Screen Broken? Professional TV Screen Replacement Service at Your Doorstep",
      subtitle: "Expert TV Screen Replacement Service in Chennai",
      content: (
        <>
          Is your TV screen cracked, damaged, displaying vertical or horizontal lines, showing black spots, flickering, or completely broken? Don&apos;t worry. We provide professional TV screen replacement services at your doorstep across Chennai. Our experienced technicians thoroughly diagnose the issue and replace damaged TV panels with high-quality, compatible screens to restore your television&apos;s display performance and picture quality.
          <br /><br />
          A damaged TV screen can occur due to accidental impact, transportation damage, power fluctuations, internal panel failure, water damage, or manufacturing defects. Whether you own an LED TV, Smart TV, Android TV, OLED TV, QLED TV, or 4K UHD TV, our expert team can handle screen replacement and panel repair services for all major TV brands.
          <br /><br />
          We repair and replace screens affected by various display issues, including cracked TV screens, broken LED TV display panels, vertical lines, horizontal lines, black spots, dead pixels, half-screen display problems, flickering screens, internal panel damage, and situations where the TV has sound but no picture. If your TV screen has been physically damaged due to impact or is suffering from water-related issues, our technicians can inspect the television and provide the most suitable screen replacement solution.
          <br /><br />
          With our doorstep TV screen replacement service in Chennai, you don&apos;t have to worry about transporting your television to a service center. Our technicians visit your location, perform a complete diagnosis, provide a transparent estimate, and carry out professional screen replacement using compatible replacement panels. We are committed to delivering fast, reliable, and affordable TV repair solutions to restore your TV to its best condition.
        </>
      )
    },
    {
      id: 2,
      title: "No Picture or Dark Picture? Professional LED Backlight Replacement Service at Your Doorstep",
      subtitle: "Expert LED Backlight Replacement Service in Chennai",
      content: (
        <>
          Is your TV screen completely dark, dim, showing a faint picture, or producing sound without displaying an image? Don&apos;t worry. We provide professional LED backlight replacement services at your doorstep across Chennai. Our experienced technicians accurately diagnose backlight-related issues and replace faulty LED backlight strips with high-quality compatible components to restore your TV&apos;s brightness, picture clarity, and overall display performance.
          <br /><br />
          LED backlight failure is one of the most common television problems and can occur due to aging LED strips, power fluctuations, overheating, continuous usage, internal hardware failure, or manufacturing defects. Whether you own an LED TV, Smart TV, Android TV, OLED TV, QLED TV, or 4K UHD TV, our expert technicians can provide reliable LED backlight replacement and repair services for all major TV brands.
          <br /><br />
          We repair and resolve a wide range of display issues caused by faulty backlights, including no picture but sound working, dark TV screens, dim displays, black screens, flickering pictures, uneven screen brightness, half-screen dark issues, white spots on the screen, intermittent picture display, LED strip failure, and situations where the TV powers on but the image is barely visible. If your television has sound but no picture or the display appears extremely dark, a defective LED backlight is often the cause, and our technicians can provide the right replacement solution.
          <br /><br />
          With our doorstep LED backlight replacement service in Chennai, you don&apos;t have to worry about transporting your television to a service center. Our technicians visit your location, perform a complete diagnosis, identify the exact cause of the display problem, provide a transparent repair estimate, and carry out professional LED backlight replacement using quality replacement components.
          <br /><br />
          We are committed to providing fast, affordable, and dependable TV repair solutions. Whether your television has a black screen, dark picture, dim display, brightness issues, or sound without picture, our skilled technicians can restore your TV to optimal working condition quickly and efficiently.
        </>
      )
    },
    {
      id: 3,
      title: "TV No Power? Professional Power Board & Motherboard Repair Service at Your Doorstep",
      subtitle: "Expert TV No Power Repair Service in Chennai",
      content: (
        <>
          Is your TV not turning on, showing no standby light, completely dead, or not responding to the remote control? Don&apos;t worry. We provide professional TV power board repair and motherboard repair services at your doorstep across Chennai. Our experienced technicians accurately diagnose power-related issues and repair or replace faulty power boards and motherboards to restore your television&apos;s performance and functionality.
          <br /><br />
          TV no power problems are among the most common television faults and can occur due to power supply board failure, motherboard damage, voltage fluctuations, power surges, short circuits, overheating, burnt electronic components, aging hardware, or internal circuit failures. Whether you own an LED TV, Smart TV, Android TV, OLED TV, QLED TV, or 4K UHD TV, our expert technicians can provide reliable power board and motherboard repair services for all major TV brands.
          <br /><br />
          We repair and resolve a wide range of no-power issues, including TVs that do not turn on, no standby light, blinking power indicators, completely dead TVs, motherboard failures, power board damage, automatic shutdown problems, restart issues, startup and boot failures, power surge damage, burnt components, short circuit faults, and televisions that do not respond even after pressing the power button. If your TV suddenly stopped working after a voltage fluctuation or electrical surge, our technicians can identify the exact cause of the problem and provide the most suitable repair solution.
          <br /><br />
          With our doorstep TV no power repair service in Chennai, you don&apos;t have to worry about transporting your television to a service center. Our technicians visit your location, perform a complete diagnosis, inspect the power board and motherboard, provide a transparent repair estimate, and carry out professional repair or replacement using quality components and industry-standard repair methods.
          <br /><br />
          We are committed to delivering fast, affordable, and dependable TV repair solutions. Whether your television has no power, no standby light, motherboard issues, power board failure, startup problems, or internal circuit faults, our skilled technicians can restore your TV to proper working condition quickly and efficiently.
        </>
      )
    },
    {
      id: 4,
      title: "TV No Sound? Professional TV Speaker Replacement Service at Your Doorstep",
      subtitle: "Expert TV No Sound Repair & Speaker Replacement Service in Chennai",
      content: (
        <>
          Is your TV displaying a perfect picture but producing no sound? Are you experiencing low volume, distorted audio, crackling noise, or completely silent speakers? Don&apos;t worry. We provide professional TV speaker replacement and audio repair services at your doorstep across Chennai. Our experienced technicians accurately diagnose sound-related issues and repair or replace faulty TV speakers and audio components to restore clear and powerful sound performance.
          <br /><br />
          TV no sound problems can occur due to damaged speakers, audio circuit failures, motherboard issues, loose internal connections, software malfunctions, power fluctuations, or aging components. Whether you own an LED TV, Smart TV, Android TV, OLED TV, QLED TV, or 4K UHD TV, our expert technicians can provide reliable speaker replacement and sound repair services for all major television brands.
          <br /><br />
          We repair and resolve a wide range of audio-related issues, including no sound with picture, low volume output, distorted sound, crackling speaker noise, buzzing audio, intermittent sound problems, one-side speaker not working, muted audio despite normal settings, sound cutting in and out, speaker damage due to power surges, and complete audio failure. If your TV picture is working normally but the sound is missing or unclear, our technicians can identify the exact cause and provide the most suitable repair solution.
          <br /><br />
          With our doorstep TV speaker replacement service in Chennai, you don&apos;t have to transport your television to a service center. Our technicians visit your location, perform a complete diagnosis, inspect the speakers and audio circuitry, provide a transparent repair estimate, and carry out professional speaker replacement or audio repair using quality replacement components.
          <br /><br />
          We are committed to delivering fast, affordable, and dependable TV repair solutions. Whether your television has no sound, distorted audio, low volume, speaker failure, or other sound-related issues, our skilled technicians can restore crystal-clear audio performance quickly and efficiently.
        </>
      )
    }
  ];

  return (
    <div className="lg:mt-0 mt-4">
      <h2 className="hidden lg:block text-center text-4xl font-bold text-[#F86E4E]">
        <span className="underline">
          {/* {data?.getServices?.brandName.toUpperCase()} */}{" "}
        </span>{" "}
      </h2>
      <div className="grid grid-cols-1 py-5 px-2 bg-white text-black">
        {/* <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] py-5 px-2 bg-white"> */}

        {
          contentData.map((item) => (
            <div key={item.id} className="mt-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-center">{item.title}</h2>
              <h3 className="text-lg lg:text-2xl font-bold text-center">{item.subtitle}</h3>
              <p className="text-lg">{item.content}</p>
            </div>
          ))
        }

        <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUM}`}>
            <button
              className={`flex items-center bg-green-600 text-white hover:bg-green-400 p-3 rounded-3xl`}
            >
              <Icons.whatsApp size={30} />
              <span className="ms-2 text-base font-bold">WhatsApp with Us</span>
            </button>
          </Link>

      </div>
    </div>
  )


};

export default HomeParaContent;
