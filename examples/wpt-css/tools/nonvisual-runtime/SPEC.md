---
id: lynx-wpt-nonvisual-runtime
type: submodule-design
status: draft
title: Nonvisual device runtime
parent: lynx-wpt-adaptation
---

## Responsibility

Execute supported manifest assertions in Lynx and return a session-bound structured result. The main-thread runtime owns stylesheet operations, computed-style observation and frame stabilization through a `start`/`poll`/`cancel` bridge. The background runtime starts and polls that bridge within a bounded budget, delivers the result and waits for collector acknowledgement.

The generated processor mounts the bridge in main-thread context; missing capabilities must surface as structured execution errors rather than silently removing the bridge. Templates produce per-card integration, while shared runtime files implement execution.

## Boundary

This is a device-side interpreter of accepted manifests, not a browser testharness or a general WPT JavaScript evaluator. Host filesystem access, ADB lifecycle, source import and evidence publication stay outside it. Shared result types and session identity connect it to the host protocol, but a semantic failure is distinct from timeout, missing API, bridge failure or transport failure.

Generator templates are not themselves inputs to an already generated card bundle. Runtime code and generated card files are bundle inputs; host evidence verification owns that fingerprint distinction.
