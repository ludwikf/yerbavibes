import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="min-h-[100vh] flex justify-center ">
      <div className="mt-[150px] mb-[50px] w-[80%]">
        <div className="text-lg font-bold mb-4">
          YerbaVibes Conditions of Use
        </div>
        <div>
          Welcome to YerbaVibes. YerbaVibes.com and/or its affiliates
          (&quot;YerbaVibes&quot;) provide its website features and other
          services to you subject to the following conditions.{" "}
          <span className="font-bold">
            If you visit YerbaVibes.com, use other YerbaVibes services,
            products, or use software or mobile applications provided by
            YerbaVibes that states that it is subject to these Conditions of Use
            (collectively “YerbaVibes Services”), you accept these conditions.
          </span>{" "}
          Please read them carefully. In addition, when you use any current,
          future YerbaVibes Services, you also will be subject to the
          guidelines, terms and agreements (“Terms”) applicable to that
          YerbaVibes Service. If these Conditions of Use are inconsistent with
          the Terms provided for any YerbaVibes service, the Terms will control.
        </div>

        <div className="flex flex-col mt-4">
          <span className="font-bold mb-1">Privacy</span>
          <span className="my-2">
            {" "}
            Please review our{" "}
            <Link href={"/privacy"} className="text-pageTheme">
              Privacy Notice
            </Link>
            , which also governs your use of any YerbaVibes Service, to
            understand our practices.
          </span>
        </div>
        <div className="flex flex-col mt-4">
          <span className="font-bold mb-1">Electronic Communications</span>
          <span className="my-2">
            {" "}
            When you use any YerbaVibes Service or send e-mails to us, you are
            communicating with us electronically. You consent to receive
            communications from us electronically. We will communicate with you
            by e-mail or by posting notices on this site or through the other
            YerbaVibes Services. You agree that all agreements, notices,
            disclosures and other communications that we provide to you
            electronically satisfy any legal requirement that such
            communications be in writing.
          </span>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <span className="font-bold">Copyright</span>
          <span>
            All content included on this site in or made available through any
            YerbaVibes Service, such as text, graphics, logos, button icons,
            images, audio clips, video clips, digital downloads, data
            compilations, and software, is the property of YerbaVibes or its
            content suppliers and protected by European and international
            copyright laws. The compilation of all content included in or made
            available through any YerbaVibes Service is the exclusive property
            of YerbaVibes and protected by European and international copyright
            laws. All software used in any YerbaVibes Service is the property of
            YerbaVibes or its software suppliers and protected by European and
            international copyright laws.
          </span>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <span className="font-bold">Trademarks</span>
          <span>
            YerbaVibes and STARMETER are registered trademarks, and the
            YerbaVibes logo and other marks indicated in any YerbaVibes Services
            are trademarks of YerbaVibes in the European and/or other countries.
            Other YerbaVibes graphics, logos, page headers, button icons,
            scripts, and service names are trademarks or trade dress of
            YerbaVibes. YerbaVibes&apos;s trademarks and trade dress may not be
            used in connection with any product or service that is not
            YerbaVibes&apos;s, in any manner that is likely to cause confusion
            among customers, or in any manner that disparages or discredits
            YerbaVibes. All other trademarks not owned by YerbaVibes that appear
            on this site or in any YerbaVibes Service are the property of their
            respective owners, who may or may not be affiliated with, connected
            to, or sponsored by YerbaVibes.
          </span>
        </div>
        <div className="flex flex-col mt-4 gap-2">
          <span className="font-bold">License and Site Access</span>
          <span>
            Subject to your compliance with these Conditions of Use YerbaVibes
            or its content providers grants you a limited, non-exclusive,
            non-transferable, non-sublicenseable license to access and make
            personal and non-commercial use of the YerbaVibes Services,
            including digital content available through the YerbaVibes Services,
            and not to download (other than page caching) or modify this site,
            or any portion of it, except with express written consent of
            YerbaVibes. Additional license terms may be found in the Terms. The
            YerbaVibes Services or any portion of such services may not be
            reproduced, duplicated, copied, sold, resold, visited, or otherwise
            exploited for any commercial purpose without express written consent
            of YerbaVibes. This license does not include any resale or
            commercial use of any YerbaVibes Service or its contents or any
            derivative use of this site or its contents. All licenses are
            non-exclusive and all rights not expressly granted to you in these
            Conditions of Use or any applicable Terms are reserved and retained
            by YerbaVibes or its licensors, suppliers, publishers,
            rightsholders, or other content providers. You will use all
            YerbaVibes Services in compliance with all applicable laws.
          </span>
          <span>
            Robots and Screen Scraping: You may not use data mining, robots,
            screen scraping, or similar data gathering and extraction tools on
            this site, except with our express written consent as noted below.
          </span>
          <span>
            Framing: You may not frame or utilize framing techniques to enclose
            any trademark, logo, or other proprietary information (including
            images, text, page layout, or form) of YerbaVibes without express
            written consent.
          </span>
          <span>
            Meta Tags: You may not use any meta tags or any other &quot;hidden
            text&quot; utilizing YerbaVibes&apos;s name or trademarks without
            the express written consent of YerbaVibes. Any unauthorized use
            terminates the permission or license granted by YerbaVibes.
          </span>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <span className="font-bold"> Your Account</span>
          <span>
            If you use any YerbaVibes Service, you are responsible for
            maintaining the confidentiality of log-in information and for
            restricting access to your computer, and you agree to accept
            responsibility for all activities that occur under your account or
            password. YerbaVibes reserves the right to refuse service, terminate
            accounts, or remove or edit content in its sole discretion.
          </span>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <span className="font-bold">
            Reviews, Comments, Communications, and Other Content
          </span>
          <span>
            Visitors may post reviews, comments, and other content; and submit
            suggestions, ideas, comments, questions, or other information, so
            long as the content is not illegal, obscene, threatening,
            defamatory, invasive of privacy, infringing of intellectual property
            rights, or otherwise injurious to third parties or objectionable, is
            not created by generative AI, and does not consist of or contain
            software viruses, political campaigning, commercial solicitation,
            chain letters, mass mailings, or any form of &quot;spam.&quot; You
            may not use a false e-mail address, impersonate any person or
            entity, or otherwise mislead as to the origin of your content.
            YerbaVibes reserves the right (but not the obligation) to remove or
            edit such content, but does not regularly review posted content.
          </span>
          <span>
            Your License to YerbaVibes: If you do post content or submit
            material, and unless we indicate otherwise, you grant YerbaVibes a
            nonexclusive, royalty-free, perpetual, irrevocable, and fully
            sublicensable right to use, reproduce, modify, adapt, publish,
            translate, create derivative works from, distribute, and display
            such content throughout the world in any media. You grant YerbaVibes
            and its sublicensees the right to use the name that you submit in
            connection with such content, if they choose. You represent and
            warrant that you own or otherwise control all of the rights to the
            content that you post; that the content is accurate; that use of the
            content you supply does not violate this policy and will not cause
            injury to any person or entity; and that you will indemnify
            YerbaVibes for all claims resulting from content you supply.
            YerbaVibes has the right but not the obligation to monitor and edit
            or remove any activity or content. YerbaVibes takes no
            responsibility and assumes no liability for any content posted by
            you or any third party. If you would like to learn more about how we
            handle content that you submit, please review our{" "}
            <Link href={"/privacy"} className="text-pageTheme">
              Privacy Notice
            </Link>
            .
          </span>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <span className="font-bold">Copyright Complaints</span>
          <span>
            YerbaVibes respects the intellectual property of others. If you
            believe that your work has been copied in a way that constitutes
            copyright infringement, please provide within YerbaVibes&apos;s{" "}
            <Link href={"/contact"} className="text-pageTheme">
              Contact page
            </Link>{" "}
            the written information specified below. Please note that this
            procedure is exclusively for notifying YerbaVibes and its affiliates
            that your copyrighted material has been infringed.
          </span>
          <span>
            An electronic or physical signature of the person authorized to act
            on behalf of the owner of the copyright interest;
          </span>
          <span>
            A description of the copyrighted work that you claim has been
            infringed upon;
          </span>
          <span>
            A description of where the material that you claim is infringing is
            located on the site;
          </span>
          <span>Your address, telephone number, and e-mail address;</span>
          <span>
            A statement by you that you have a good-faith belief that the
            disputed use is not authorized by the copyright owner, its agent, or
            the law;
          </span>
          <span>
            A statement by you, made under penalty of perjury, that the above
            information in your notice is accurate and that you are the
            copyright owner or authorized to act on the copyright owner&apos;s
            behalf.
          </span>
          <span>
            In appropriate circumstances, YerbaVibes will terminate the accounts
            of account holders who are repeat infringers.
          </span>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <span className="font-bold">
            Disclaimer of Warranties and Limitation of Liability
          </span>
          <span>
            THE YERBAVIBES SERVICES AND ALL INFORMATION, CONTENT, MATERIALS,
            PRODUCTS (INCLUDING SOFTWARE) AND OTHER SERVICES INCLUDED ON OR
            OTHERWISE MADE AVAILABLE TO YOU THROUGH THE YERBAVIBES SERVICES ARE
            PROVIDED BY YERBAVIBES ON AN &quot;AS IS&quot; AND &quot;AS
            AVAILABLE&quot; BASIS. YERBAVIBES MAKES NO REPRESENTATIONS OR
            WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF
            THE YERBAVIBES SERVICES OR THE INFORMATION, CONTENT, MATERIALS,
            PRODUCTS (INCLUDING SOFTWARE) OR OTHER SERVICES INCLUDED ON OR
            OTHERWISE MADE AVAILABLE TO YOU THROUGH THE YERBAVIBES SERVICES. YOU
            EXPRESSLY AGREE THAT YOUR USE OF THE YERBAVIBES SERVICES IS AT YOUR
            SOLE RISK. YERBAVIBES RESERVES THE RIGHT TO WITHDRAW ANY YERBAVIBES
            SERVICE OR DELETE ANY INFORMATION FROM THE YERBAVIBES SERVICES AT
            ANY TIME IN ITS DISCRETION.
          </span>

          <span>
            TO THE FULL EXTENT PERMISSIBLE BY APPLICABLE LAW, YERBAVIBES
            DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT
            LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
            PARTICULAR PURPOSE. YERBAVIBES DOES NOT WARRANT THAT THE YERBAVIBES
            SERVICES, INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING
            SOFTWARE) OR OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE
            TO YOU THROUGH THE YERBAVIBES SERVICES, ITS SERVERS, OR ELECTRONIC
            COMMUNICATIONS SENT FROM YERBAVIBES ARE FREE OF VIRUSES OR OTHER
            HARMFUL COMPONENTS. YERBAVIBES WILL NOT BE LIABLE FOR ANY DAMAGES OF
            ANY KIND ARISING FROM THE USE OF ANY YERBAVIBES SERVICE, OR FROM ANY
            INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE) OR
            OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU
            THROUGH ANY YERBAVIBES SERVICE, INCLUDING, BUT NOT LIMITED TO
            DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, AND CONSEQUENTIAL DAMAGES.
          </span>

          <span>
            CERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR
            THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY
            TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS, OR
            LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MIGHT HAVE ADDITIONAL
            RIGHTS.
          </span>
          <span>
            YerbaVibes Software Terms In addition to these Conditions of Use,
            the terms found here apply to any software (including any updates or
            upgrades to the software and any related documentation) that we make
            available to you from time to time for your use in connection with
            YerbaVibes Services (“YerbaVibes Software”). If we provide specific
            Terms for the YerbaVibes Software and there is a conflict between
            the specific Terms for the YerbaVibes Software and these Conditions
            of Use, the specific Terms for the YerbaVibes Software will govern.
          </span>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <span className="font-bold">Applicable Law</span>
          <span>
            By using any YerbaVibes Service, you agree that European law,
            without regard to principles of conflict of laws, will govern these
            Conditions of Use and any dispute of any sort that might arise
            between you and YerbaVibes.
          </span>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <span className="font-bold">Disputes</span>
          <span>
            Any dispute or claim relating in any way to your use of any
            YerbaVibes Service, or any products or services sold or distributed
            by YerbaVibes or through the YerbaVibes Services will be resolved by
            binding arbitration, rather than in court, except that you may
            assert claims in small claims court if your claims qualify. The
            Federal Arbitration Act and federal arbitration law apply to this
            agreement.
          </span>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <span className="font-bold">
            Site Policies, Modification, and Severability
          </span>
          <span>
            Please review our other policies. These policies also govern your
            use of YerbaVibes Services. We reserve the right to make changes to
            our site, policies, Service Terms, and these Conditions of Use at
            any time. If any of these conditions shall be deemed invalid, void,
            or for any reason unenforceable, that condition shall be deemed
            severable and shall not affect the validity and enforceability of
            any remaining condition.
          </span>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <span className="font-bold">
            Additional YerbaVibes Software Terms
          </span>
          <span>
            <span className="font-bold">Use of the YerbaVibes Software. </span>
            You may use the YerbaVibes Software only in connection with the
            YerbaVibes Services. You may not separate any individual component
            of the YerbaVibes Software for use other than in connection with the
            YerbaVibes Services, incorporate any portion of it into your own
            programs or compile any portion of it in combination with your own
            programs, transfer it for use with another service, use it, or any
            portion of it, over a network, or sell, rent, lease, lend, loan,
            distribute or sub-license the YerbaVibes Software or otherwise
            assign any rights to the YerbaVibes Software in whole or in part.
            You may not use the YerbaVibes Software for any illegal purpose. We
            may discontinue some or all of any YerbaVibes Software we provide,
            and we may terminate your right to use any YerbaVibes Software at
            any time and in such event may modify it to make it inoperable. Your
            rights to use the YerbaVibes Software will automatically terminate
            without notice from us if you fail to comply with any of these
            terms. Additional third party terms contained within or distributed
            with certain YerbaVibes Software that are specifically identified in
            related documentation may apply to that YerbaVibes Software and will
            govern the use of that YerbaVibes Software in the event of a
            conflict with these Conditions of Use.
          </span>
          <span>
            <span className="font-bold"> No Reverse Engineering.</span> You may
            not, and you will not encourage, assist or authorize any other
            person to modify, reverse engineer, decompile or disassemble, or
            otherwise tamper with, the YerbaVibes Software, whether in whole or
            in part, or create any derivative works from or of the YerbaVibes
            Software.
          </span>
          <span>
            <span className="font-bold">Updates.</span> In order to keep the
            YerbaVibes Software up-to-date, we may offer automatic or manual
            updates at any time and without notice to you.
          </span>
        </div>
      </div>
    </div>
  );
}
